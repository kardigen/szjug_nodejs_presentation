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
npm install socket.io express

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

#Install vows test framework
npm install vows