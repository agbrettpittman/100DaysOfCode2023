FROM node AS code
ARG VITE_API_HOST=localhost
ARG VITE_API_PORT=80
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine AS server
WORKDIR /usr/share/nginx/html
COPY --from=code /app/dist .
EXPOSE 80
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]