FROM node:lts as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build

FROM nginx:stable as serve
COPY --from="build" /usr/local/app/build /usr/share/nginx/html