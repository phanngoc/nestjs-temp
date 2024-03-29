# stage 1 building the code

FROM node:20-alpine as builder

WORKDIR /usr/app


COPY . .

COPY .env .env

RUN yarn && yarn build

RUN yarn prisma generate

EXPOSE 3000

CMD yarn run dev
