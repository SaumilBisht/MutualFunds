FROM node:22-alpine

RUN apk update && apk add openssl

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY turbo.json ./
COPY packages ./packages
COPY apps/backend ./apps/backend

RUN pnpm install

COPY . .

RUN pnpm run db:generate

EXPOSE 3002
CMD ["pnpm", "run", "start:be"]