FROM node:22-slim

RUN apt-get update && apt-get install -y openssl

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

EXPOSE 3001
CMD ["pnpm", "run", "start:be"]