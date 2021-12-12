# ビルドステージ
FROM mhart/alpine-node:latest as build
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

# 本番環境ステージ
FROM mhart/alpine-node:latest
RUN npm install --global serve
WORKDIR /
COPY --from=build /dist .
CMD ["serve", "-p", "3000", "-s", "."]