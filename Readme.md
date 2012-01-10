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

## 1. configure basic project

        cd app0
        init.sh
        node_modules/express/bin/express -s .
        node app.js

## 2. start simple project

        cd app1
        init.sh
        node app.js

## 3. see template changes
* layout.jade: block and include keywords
* calc.jade: extends, block append, for

