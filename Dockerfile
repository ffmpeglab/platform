FROM node:24-alpine AS builder
WORKDIR /app

RUN apk add git
# Ensure production runtime defaults
ENV NODE_ENV=production

COPY . .

RUN npm i -g @nestjs/cli

RUN yarn

RUN mkdir node_modules/@hashicorp

RUN git clone https://github.com/hashicorp/vault-client-typescript node_modules/@hashicorp/vault-client-typescript

RUN ls -1 node_modules

WORKDIR /app/node_modules/@hashicorp/vault-client-typescript

RUN yarn set version stable

RUN yarn build

WORKDIR /app

RUN yarn build

# Expose port
EXPOSE 7001

# Start the application
ENTRYPOINT ["node", "dist/main.js"]