FROM node:18-slim

ARG PORT
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE $PORT

CMD ["node", "index.js"]
