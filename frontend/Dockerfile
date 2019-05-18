FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install \
  && npm install react-scripts@3.0.1 -g

CMD ["npm", "run", "dev-server"]
