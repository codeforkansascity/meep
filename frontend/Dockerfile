FROM node:8.16.0-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY src/* src/

COPY .babelrc /app

COPY public/* public/

COPY webpack.config.js /app

EXPOSE 8080

CMD ["npm", "run", "dev-server"]
