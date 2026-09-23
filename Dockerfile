FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_API_URL
ARG VITE_WHATSAPP_NUMBER
ARG VITE_CONTACT_PHONE
ARG VITE_CONTACT_EMAIL

ENV VITE_API_URL=$VITE_API_URL \
	VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER \
	VITE_CONTACT_PHONE=$VITE_CONTACT_PHONE \
	VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:1.27-alpine

ENV PORT=8080

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 8080
