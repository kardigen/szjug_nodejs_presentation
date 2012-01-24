# Presentation agenda
* presentation goal
* node.js start
* express.js start
* express.js simple project
* tests?
* troubleshooting
* summary

# Presentation goal

This presentation is addressed to java people.
I want to extends your point of view with good dose of fun :)

# Node.js start

* Node.js for JavaScript like jvm for java
* http://nodejs.org/ and http://npmjs.org/

        scripts/install-node-modules.sh
        
* hello node

        node hello_node.js

* node.js interactive mode

        node
  
* js fast tutorial js_basics.js (http://www.howtocreate.co.uk/tutorials/javascript/)
* node debuging https://github.com/joyent/node/wiki/using-eclipse-as-node-applications-debugger

        node --debug-brk js_basics.js

# express.js start

        node hello_express.js

# express.js simple project

## 1. configure basic project - app0

        cd app0
        init.sh
        node_modules/express/bin/express -s .
        node app.js

## 2. run simple project - app1

        cd app1
        init.sh
        node app.js

JADE template system (https://github.com/visionmedia/jade)
   
* layout.jade: block and include keywords
* calc.jade: extends, block append, for, if

## 3. simple project - app2

        cd app2
        init.sh
        node app.js
        
* handlie HTTP POST method parameters
* simple AJAX support
* mongoDB support

## 4. simple project - app3

        cd app3
        init.sh
        node app.js
        
* socket.io support (http://http://socket.io)

## 4. simple project - app4

        cd app4
        init.sh
        node app.js
        
* Vows test (http://vowsjs.org/)

        ./node_modules/vows/bin/vows --spec tests/*
