FROM node:12-alpine

WORKDIR /app

COPY package* yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]
