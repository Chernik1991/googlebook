FROM node:16.14.0 as dependencies
WORKDIR /
COPY package.json yarn.lock ./
RUN yarn install

FROM node:16.14.0 as builder
WORKDIR /
COPY . .
COPY --from=dependencies /node_modules ./node_modules
RUN yarn build:production

FROM node:16.14.0 as runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["yarn", "start"]