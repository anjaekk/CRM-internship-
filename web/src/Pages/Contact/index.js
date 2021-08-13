import React from 'react';

// TEMPLETE
import Templete from './Templete/index';

function index() {
  return <Templete column={column} data={data} data_search={data_search} />;
}

export default index;

const column = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'company',
    accessor: 'company',
  },
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'department',
    accessor: 'department',
  },
  {
    Header: 'position',
    accessor: 'position',
  },
  {
    Header: 'email',
    accessor: 'email',
  },
  {
    Header: 'contact',
    accessor: 'contact',
  },
];

const data = [
  {
    id: 1,
    company: 'Borer-Nader',
    name: 'Fiann Dunsmore',
    department: 'Business Development',
    position: 'Music',
    email: 'fdunsmore0@icq.com',
    contact: '7959070926',
  },
  {
    id: 2,
    company: 'Considine-Halvorson',
    name: 'Gabi Dargan',
    department: 'Sales',
    position: 'Kids',
    email: 'gdargan1@wordpress.com',
    contact: '8317147935',
  },
  {
    id: 3,
    company: 'Keebler, Heller and Jacobi',
    name: 'Guntar Roomes',
    department: 'Human Resources',
    position: 'Movies',
    email: 'groomes2@cyberchimps.com',
    contact: '8937969802',
  },
  {
    id: 4,
    company: 'Daniel and Sons',
    name: 'Charmain Delooze',
    department: 'Legal',
    position: 'Garden',
    email: 'cdelooze3@independent.co.uk',
    contact: '9014804644',
  },
  {
    id: 5,
    company: 'Leuschke Group',
    name: 'Terencio Lightbowne',
    department: 'Human Resources',
    position: 'Electronics',
    email: 'tlightbowne4@who.int',
    contact: '8573738398',
  },
  {
    id: 6,
    company: 'Herman, Walker and Lehner',
    name: 'Isaiah Bayston',
    department: 'Marketing',
    position: 'Grocery',
    email: 'ibayston5@whitehouse.gov',
    contact: '5596238705',
  },
  {
    id: 7,
    company: 'Yundt, Balistreri and Lind',
    name: 'Mollie Woolnough',
    department: 'Marketing',
    position: 'Jewelry',
    email: 'mwoolnough6@multiply.com',
    contact: '8383722796',
  },
  {
    id: 8,
    company: "O'Reilly-Nikolaus",
    name: 'Maura Rolph',
    department: 'Legal',
    position: 'Home',
    email: 'mrolph7@joomla.org',
    contact: '9451479136',
  },
  {
    id: 9,
    company: 'Pacocha-Dach',
    name: 'Jessica MacTimpany',
    department: 'Marketing',
    position: 'Toys',
    email: 'jmactimpany8@bandcamp.com',
    contact: '9553577446',
  },
  {
    id: 10,
    company: 'Greenholt, Simonis and Rolfson',
    name: 'Etheline Whittall',
    department: 'Accounting',
    position: 'Automotive',
    email: 'ewhittall9@jimdo.com',
    contact: '3395751211',
  },
  {
    id: 11,
    company: 'Donnelly-Kris',
    name: 'Lonnie Golt',
    department: 'Sales',
    position: 'Automotive',
    email: 'lgolta@addtoany.com',
    contact: '6636385531',
  },
  {
    id: 12,
    company: 'Morar and Sons',
    name: 'Cornall Gilluley',
    department: 'Human Resources',
    position: 'Books',
    email: 'cgilluleyb@disqus.com',
    contact: '2028803913',
  },
  {
    id: 13,
    company: 'Spinka Group',
    name: 'Daffi Pittham',
    department: 'Sales',
    position: 'Grocery',
    email: 'dpitthamc@amazon.de',
    contact: '8715096883',
  },
  {
    id: 14,
    company: 'Bartell Group',
    name: 'Abigail Randleson',
    department: 'Marketing',
    position: 'Outdoors',
    email: 'arandlesond@google.cn',
    contact: '7654830185',
  },
  {
    id: 15,
    company: 'Gislason, Bosco and Ledner',
    name: 'Conn Shannahan',
    department: 'Marketing',
    position: 'Tools',
    email: 'cshannahane@ox.ac.uk',
    contact: '3424330865',
  },
  {
    id: 16,
    company: 'Johnson Group',
    name: 'Bella Hanne',
    department: 'Training',
    position: 'Kids',
    email: 'bhannef@surveymonkey.com',
    contact: '7181289959',
  },
  {
    id: 17,
    company: 'Okuneva-White',
    name: 'Frederigo Murt',
    department: 'Accounting',
    position: 'Toys',
    email: 'fmurtg@godaddy.com',
    contact: '3055907405',
  },
  {
    id: 18,
    company: 'Beatty Group',
    name: 'Iormina Croote',
    department: 'Business Development',
    position: 'Movies',
    email: 'icrooteh@upenn.edu',
    contact: '3118676559',
  },
  {
    id: 19,
    company: 'Trantow, Gutkowski and Cruickshank',
    name: 'Glen Caulder',
    department: 'Engineering',
    position: 'Shoes',
    email: 'gcaulderi@cornell.edu',
    contact: '9861880786',
  },
  {
    id: 20,
    company: 'Sauer, Streich and Abbott',
    name: 'Page Synnott',
    department: 'Support',
    position: 'Health',
    email: 'psynnottj@ocn.ne.jp',
    contact: '5556340623',
  },
];

const data_search = {
  id: 0,
  title: 'search',
  selects: [
    {
      id: 0,
      title: 'name',
    },
    {
      id: 1,
      title: 'company',
    },
  ],
};
