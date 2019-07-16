FROM node:alpine

LABEL version="0.1"
LABEL project="meep"
LABEL component="frontend"

RUN npm install -g --no-progress --ignore-optional webpack webpack-cli

WORKDIR /tmp
COPY package.json /tmp/
RUN npm install --no-progress --ignore-optional

WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN cp -a /tmp/node_modules /usr/src/app/
ENV NODE_ENV=dev
RUN webpack

ENV NODE_ENV=dev
ENV PORT=3000

CMD [ “/usr/local/bin/npm”, “run”, "dev-server" ]
EXPOSE 3000
