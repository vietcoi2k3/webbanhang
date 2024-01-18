FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production && yarn install
CMD ["npm", "start"]
EXPOSE 3000