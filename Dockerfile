FROM node:14.15

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV GRAPHQL_HOST="https://bitbet-lq4prtzzva-uc.a.run.app"

RUN yarn build

CMD [ "yarn", "start" ]
