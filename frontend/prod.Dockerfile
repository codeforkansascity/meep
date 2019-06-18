FROM node:alpine as build

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

ENV NODE_ENV=production

RUN webpack
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
