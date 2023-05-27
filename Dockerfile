FROM node:12.16.1-alpine as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# ENV NODE_OPTIONS="--openssl-legacy-provider"
# ARG env=prod
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/trade-technology-challenge/ /usr/share/nginx/html

# Gerando uma imagem Docker
## docker build . -t siddz/trade-technology-challenge

# Gerando um container
## docker run -p 3000:80 siddz/trade-technology-challenge

# docker hub
## docker login
## docker push siddz/trade-technology-challenge

# ir no site hub.docker.com/repositories -> Public -> Settings -> make private
