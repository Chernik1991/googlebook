FROM node:16.14.0 as dependencies
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
# docker build . -t googlebook
# docker run -p 3000:3000 googlebook