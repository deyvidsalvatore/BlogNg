FROM node:14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx scully --project BlogNg

FROM node:14-alpine
WORKDIR /app
RUN npm install express
COPY --from=builder /app/dist/static/ ./dist
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]
