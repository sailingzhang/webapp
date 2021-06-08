#! /bin/bash

npx webpack
appdir=/app/www/cactus
buildappdir=/tmp/webappbuild/cactus


sudo mkdir -p ${buildappdir}
sudo mkdir -p ${appdir}
# mkdir -p ${app_config_dir}

sudo cp -rf  css ${buildappdir}
sudo cp -rf  dist  ${buildappdir}
sudo cp -rf  *.html  ${buildappdir}
sudo cp -f  ../mime.types   ${buildappdir}
sudo cp -f  ../nginx_static.conf    ${buildappdir}
sudo cp -f free.jpg   ${buildappdir}

sudo cp -rf ${buildappdir} /app/www/