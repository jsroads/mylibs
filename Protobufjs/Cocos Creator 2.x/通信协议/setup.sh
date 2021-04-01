#!/bin/bash
pbjs -t static-module -w commonjs --es6 --no-delimited --no-verify "./protobuf/*.proto" >  ./dist/bufBundle.js
pbts -o ./dist/bufBundle.d.ts ./dist/bufBundle.js

