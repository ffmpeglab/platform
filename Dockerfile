FROM node:24-alpine AS builder
WORKDIR /app

RUN apk add git
# Ensure production runtime defaults
ENV NODE_ENV=production

COPY . .

RUN npm i -g @nestjs/cli

RUN yarn set version stable
RUN yarn install
RUN yarn

RUN yarn build

WORKDIR /app

RUN yarn build

# Expose port
EXPOSE 7001

# Start the application
ENTRYPOINT ["node", "dist/main.js"]