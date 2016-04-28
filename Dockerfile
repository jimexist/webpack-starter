FROM node:6.0
MAINTAINER Jiayu Liu <etareduce@gmail.com>

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json /opt/app
RUN npm install

COPY . /opt/app
RUN npm run build && \
  rm -r src webpack.*.js devServer.js

EXPOSE 3000

CMD ["node", "server/index.js"]
