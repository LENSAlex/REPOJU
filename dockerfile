FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build
FROM nginx:latest
RUN mkdir /app
COPY --from=build-stage /app/dist/angular-tour-of-heroes/ /app
COPY nginx.conf /etc/nginx/nginx.conf
USER nginx


# docker build . -t my-app
# docker run -d -p 8080:80 my-app


#https://bojnansky.com/running-angular-tests-with-github-actions/
