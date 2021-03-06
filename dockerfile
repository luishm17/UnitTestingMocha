FROM node:14-alpine

WORKDIR /app/node

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD [ "node", "app.js"]