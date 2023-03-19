FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install nodemon --save-dev

EXPOSE 5001

CMD ["node", "./public/index.js"]