# Etapa 1: Construir o aplicativo React
#FROM node:18 AS builder

#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build


# Etapa 2: Configurar o Nginx para servir a aplicação
FROM nginx:alpine

# Copiar o build da aplicação para a pasta padrão do Nginx
COPY ./build /usr/share/nginx/html

# Copiar o build da aplicação para a pasta padrão do Nginx
COPY ./build /usr/share/nginx/html/scms


# Copiar configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para o Nginx
EXPOSE 8382
