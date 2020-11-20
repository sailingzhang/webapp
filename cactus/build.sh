#! /bin/bash

npx webpack
appdir=/app/
app_config_dir=/app_config/www
mkdir -p ${appdir}
mkdir -p ${app_config_dir}

cp -rf  css ${app_config_dir}
cp -rf  dist  ${app_config_dir}
cp -rf  *.html  ${app_config_dir}
cp -f  ../mime.types   ${app_config_dir}
cp -f  ../nginx_static.conf    ${app_config_dir}
