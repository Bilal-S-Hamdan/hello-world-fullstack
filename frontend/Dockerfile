FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=30030
EXPOSE 30030
CMD ["npm", "start"]
