#! /bin/bash

npx webpack
appdir=/app/
app_config_dir=/app_config/www/cactus
mkdir -p ${appdir}
mkdir -p ${app_config_dir}

sudo cp -rf  css ${app_config_dir}
sudo cp -rf  dist  ${app_config_dir}
sudo cp -rf  *.html  ${app_config_dir}
sudo cp -f  ../mime.types   ${app_config_dir}
sudo cp -f  ../nginx_static.conf    ${app_config_dir}
