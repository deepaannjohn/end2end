FROM nginx
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/data/www /data/www
COPY nginx/data/images /data/images
COPY nginx/conf /etc/nginx