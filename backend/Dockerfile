FROM node:10.16

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD [ "node", "index.js" ]