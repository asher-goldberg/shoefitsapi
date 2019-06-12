FROM node:10.16-alpine

WORKDIR /shoefit

COPY package*.json ./
RUN npm install

COPY . .