FROM node:12-buster-slim

WORKDIR /app

ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json
RUN npm install --production --silent && mv node_modules ../
RUN npm install react-scripts@3.0.1 -g
COPY . /app

EXPOSE 80

CMD ["npm", "run", "start"]
