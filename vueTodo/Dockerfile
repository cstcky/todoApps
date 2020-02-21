FROM ubuntu:18.04 
RUN apt-get update -y && apt-get upgrade -y && apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get -y install nodejs
ENV PATH=/data/node_modules/.bin:$PATH

WORKDIR /data/
COPY package.json ./
RUN npm install -y 

COPY . /data/vuetodo
WORKDIR /data/vuetodo

CMD ["npm", "start"]
