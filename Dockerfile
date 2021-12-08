FROM node:16 AS base
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn add prisma
RUN yarn

COPY . .

ENV NODE_PATH=./build

RUN yarn run build
RUN useradd -m myuser
USER myuser
CMD ["/usr/src/app/build/index.js","node"]
