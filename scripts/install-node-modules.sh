#!/bin/sh

echo "Intalling npm_modules at default path ./"

export NODE_PATH=`pwd`

# Install Express (High performance, high class web development for Node.js)
npm install express

# Install Jade (Node Template Engine)
npm install jade

# Install Mongoose (Mongodb ORM)
npm install mongoose

# Install Socket.io (Realtime apps in every browser and mobile device)
npm install socket.io

#Install log4js (A logger framework for work with nodejs)
npm install log4js

#Install i18n
npm install i18n

#Install underscore
npm install underscore

#Install underscore string extension
npm install underscore.string

#Install async lib (https://github.com/caolan/async)
npm install async

#Install Simplified HTTP request method
npm install request

#Link socket io to static directory
#ln -sf ../../node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.min.js static/js/

#Link underscore to static directory
#ln -sf ../../node_modules/underscore/underscore.min.js static/js/
#ln -sf ../../node_modules/underscore.string/dist/underscore.string.min.js static/js/
