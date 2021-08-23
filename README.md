# 🖼 BToolTek

## 📍 프로젝트 개요
- **CRM 영업지원 시스템 구축 프로젝트**
- **기 간**: 2021.08.02.~2021.08.27.(20일)
- **Team member**
  - Frontend: 1인(성정준)
  - Backend: 1인(안재경)
       
## 📍 프로젝트 미리보기

![](https://images.velog.io/images/anjaekk/post/a48be216-befc-4a4b-903b-db86a34a289a/Jul-26-2021_13-16-47.gif)

## 📍 Database 설계

<details>
<summary>Database modeling</summary>
<div markdown="2">       

![image](https://user-images.githubusercontent.com/74139727/130344978-22559128-4640-45d2-a726-072be9b1fce5.png)

</div>
</details>

## 📍 구현 기능
-Unit test를 통한 코드 검사

|User(회원가입 및 로그인)|Product(상품 리스트, 상세보기)|Contract(입찰, 판매, 계약)|
|:-:|:-:|:-:|
|Bcrypt 암호화|pagination|구매자와 판매자 동일가격 입찰 체결|
|JWT 사용|카테고리별 정렬|입찰 CRUD|
|카카오 로그인 API|베스트작가, 구매, 판매 filtering|
|회원가입 유효성 검사|최근 체결거래 기간별 filtering|
||계약금액 변동내역 조회||

## 📍 내가 구현한 기능
__*관련 코드 확인이 가능합니다__
<details>
<summary>회원가입 및 로그인(Bcrypt 암호화, JWT 사용, 정규표현식을 사용한 validation)</summary>
<div markdown="1">       

- 회원가입
```
#users.views.py

 REGEX = {
    'email'    : '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
    'password' : '^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,16}$'
}
 
 class SignupView(View):
    def post(self, request):
        try:
            data         = json.loads(request.body)
            email        = data['email']
            password     = data['password']
            phone_number = data['phone_number']
            name         = data['name']

            if not re.match(REGEX['email'], email) or not re.match(REGEX['password'], password):
                return JsonResponse({'message':'INVALID_ERROR'}, status=400)
            
            if User.objects.filter(email=email).exists() or User.objects.filter(phone_number=phone_number).exists():
                return JsonResponse({'message':'DUPLICATE'},status=409)
            
            encoded_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

            User.objects.create(
                email        = email,
                password     = encoded_password.decode('utf-8'),
                phone_number = phone_number,
                name         = name
            )
            return JsonResponse({'message':'SUCCESS'}, status=201)
        
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'},status=400)
```

- 로그인
```
#users.views.py

class SigninView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)

            if not User.objects.filter(email=data['email']).exists():
                return JsonResponse({'message':'INVALID_USER'},status=401)
            
            email    = data['email']
            password = data['password']
            user_id  = User.objects.get(email=email).id

            if bcrypt.checkpw(password.encode('utf-8'), User.objects.get(id=user_id).password.encode('utf-8')):
                access_token = jwt.encode({'user_id':user_id, 'exp':datetime.utcnow()+timedelta(days=1)},SECRET_KEY,algorithm=ALGORITHMS)
                return JsonResponse({'message':'SUCCESS', 'TOKEN':access_token}, status=200)

            return JsonResponse({'message':'INVALID_USER'}, status=401)
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400) 
```

</div>
</details>


<details>
<summary>카카오 API를 이용한 소셜로그인 기능 구현</summary>
<div markdown="1">       

```
#users.views.py
  
class KakaoSigninView(View):
    def get(self, request):
        access_token     = request.headers.get('Authorization')
        profile_request  = requests.get("https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"}).json()
        user, is_created = User.objects.get_or_create(kakao_id = profile_request["id"])
        access_token     = jwt.encode({'user_id':user.id, 'exp':datetime.utcnow()+timedelta(days=1)},SECRET_KEY,algorithm=ALGORITHMS)

        if is_created:
            user.email = profile_request['kakao_account']["email"]
            user.save()
            return JsonResponse({'message':'SUCCESS', 'TOKEN':access_token}, status=201)
        return JsonResponse({'message':'SUCCESS', 'TOKEN':access_token}, status=200) 
```


</div>
</details>




<details>
<summary>사용자 Authentication 확인</summary>
<div markdown="1">       

```
#utils.py
  
def authorization(func):
    def wrapper(self, request, *args, **kwargs):
        access_token = request.headers.get('Authorization', None)

        if not access_token:
            return JsonResponse({'error': 'ACESS_TOKEN_REQUIRED'}, status=401)

        try:
            payload = jwt.decode(access_token, SECRET_KEY, ALGORITHMS)

            if not User.objects.filter(id=payload['user_id']).exists():
                return JsonResponse({'message': 'INVALID_USER'}, satus=400)

            request.user = User.objects.get(id=payload['user_id'])
            return func(self, request, *args, **kwargs)
            

        except jwt.InvalidSignatureError:
            return JsonResponse({'error':'INVALID_TOKEN'}, status=400)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error':'EXPIRED_SIGNATURE'}, status=401)
        except jwt.DecodeError:
            return JsonResponse({'error':'INVALID_TOKEN'}, status=401)
            
    return wrapper
```

</div>
</details>

<details>
<summary>제품 상세 엔드포인드(상품 정보, 최근 체결거래 가격 기간별 filtering, 해당 상품 체결거래 내역 조회) </summary>
<div markdown="1">       

- 최근 거래내역 및 해당 상품 거래 정보
```
#products.views.py
class ProductDetailView(View):
    def get(self, request, product_id):
        if not Product.objects.filter(id=product_id).exists():
            return JsonResponse({'message':'INVALID_ERROR'}, status=404)     
        product = Product.objects.prefetch_related(
            'productcolor_set__color',
            'bidding_set', 
            'productimage_set',
            Prefetch('bidding_set', queryset=Bidding.objects.filter(status_id=1, is_seller=1).order_by('-price', 'created_at'), to_attr="selling_bidding"),
            Prefetch('bidding_set', queryset=Bidding.objects.filter(status_id=1, is_seller=0).order_by('-price', 'created_at'), to_attr="buying_bidding"),
            Prefetch('bidding_set', queryset=Bidding.objects.filter(status_id=1, is_seller=1).order_by('-created_at'), to_attr="selling_bidding_detail"),
            Prefetch('bidding_set', queryset=Bidding.objects.filter(status_id=1, is_seller=0).order_by('-created_at'), to_attr="buying_bidding_detail")
        ).get(id=product_id)

        contract_choice = request.GET.get('contract_choice', '1w')
        contract_period = {
            '3m':datetime.now()-relativedelta(months=3),
            '1m':datetime.now()-relativedelta(months=1),
            '1w':datetime.now()-timedelta(weeks=1)
        }

        contract_all = Contract.objects.select_related('selling_bid__product').filter(selling_bid__product=product_id).order_by('-created_at')
        contracts    = contract_all.filter(created_at__range=(contract_period[contract_choice], datetime.now())).order_by('-created_at')

        if contract_all.count() >= 2:
            latest_price          = contract_all[0].selling_bid.price
            old_price             = contract_all[1].selling_bid.price
            comparing_price       = latest_price - old_price
            comparing_price_ratio = round((comparing_price / old_price) * 100, 1)
        else:
            latest_price = comparing_price = comparing_price_ratio = 0

  main_info = {
            'name'                     : product.name,
            'recent_price'             : contract_all[0].selling_bid.price if contract_all.exists() else 0,
            'oldest_selling_bidding_id': product.selling_bidding[0].id if product.selling_bidding else None,
            'oldest_buying_bidding_id' : product.buying_bidding[0].id if product.buying_bidding else None,
            'current_selling_price'    : product.selling_bidding[0].price if product.selling_bidding else None,
            'current_buying_price'     : product.buying_bidding[0].price if product.buying_bidding else None,
            'image_url'                : [image.image_url for image in product.productimage_set.all()],
            'comparing_price'          : comparing_price,
            'comparing_price_ratio'    : comparing_price_ratio
        }
```
  
- 기간별 거래내역 조회 및 상품 정보
```
contract_all = [{
            'contract_date' :contract.created_at.strftime('%Y-%m-%d'), 
            'contract_price':contract.selling_bid.price
        } for contract in contract_all]

        contract_detail = [{
            'contract_date' :contract.created_at.strftime('%Y-%m-%d'),
            'contract_price':contract.selling_bid.price
        } for contract in contracts]

        bidding_detail  = {
            'selling_bidding':[{
                'selling_bidding_date' : selling_bidding.created_at.strftime('%Y-%m-%d'),
                'selling_bidding_price' :selling_bidding.price
            } for selling_bidding in product.selling_bidding_detail],
            'buying_bidding':[{
                'buying_bidding_date':buying_bidding.created_at.strftime('%Y-%m-%d'),
                'buying_bidding_price':buying_bidding.price
            } for buying_bidding in product.buying_bidding_detail],
        }

        product_info = {
            'model_number'  :product_id,
            'author'        :product.author.name,
            'color'         :[product_color.color.name for product_color in product.productcolor_set.all()],
            'original_price':product.original_price
        }
        
        return JsonResponse({
            'message'        :'SUCCESS',
            'main_info'      :main_info,
            'contract_detail':contract_detail,
            'contract_all'   :contract_all,
            'bidding_detail' :bidding_detail,
            'product_info'   :product_info},
        status=200)
```


</div>
</details>


## 📍 API Documentation
https://documenter.getpostman.com/view/16450829/TzsZqTM6

## 📍 프로젝트 진행
<details>
<summary>Trello를 이용한 Scrum관리</summary>
<div markdown="1">       

![image](https://user-images.githubusercontent.com/74139727/130344934-2cd9d61b-26ac-4ced-b90e-3f6335ead0a2.png)


</div>
</details>

- 매일 어제 한 일, 오늘 할 일, 특이사항 공유 stand up meeting 진행
- 미팅전 Agenda 공유 
