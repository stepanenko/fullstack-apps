FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Will React take this env variable?
ENV PORT=4040

EXPOSE 4040

CMD ["npm", "start"]
