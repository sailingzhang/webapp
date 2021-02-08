#! /bin/bash

npx webpack
appdir=/app/www/cactus
app_config_dir=/app_config/www/cactus
sudo mkdir -p ${appdir}
# mkdir -p ${app_config_dir}

sudo cp -rf  css ${appdir}
sudo cp -rf  dist  ${appdir}
sudo cp -rf  *.html  ${appdir}
sudo cp -f  ../mime.types   ${appdir}
sudo cp -f  ../nginx_static.conf    ${appdir}
