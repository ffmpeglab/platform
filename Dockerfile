FROM node:24-alpine AS builder
WORKDIR /app

RUN apk install git
# Ensure production runtime defaults
ENV NODE_ENV=production

COPY . .

RUN npm i -g @nestjs/cli

RUN yarn && yarn build

# Expose port
EXPOSE 7001

# Start the application
ENTRYPOINT ["node", "dist/main.js"]