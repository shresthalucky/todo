FROM node:12-alpine

WORKDIR /app

COPY package* yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "run", "start"]