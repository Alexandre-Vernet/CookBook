FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .


CMD [ "npm","run", "start"]

EXPOSE 3000
