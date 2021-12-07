FROM node:16 AS base
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

ENV NODE_PATH=./build

RUN yarn run build

CMD ["/usr/src/app/build/index.js","node"]
