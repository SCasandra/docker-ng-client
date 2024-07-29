ARG NODE_VERSION=20

# Multi-stage build

FROM node:${NODE_VERSION}-alpine AS dev-stage

WORKDIR /app

ENTRYPOINT ["npm","run", "start"]

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.15.8-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/course-client/browser /usr/share/nginx/html