#!/bin/bash
pbjs -t static-module -r creator3 -w commonjs --es6 --no-verify --force-number "./protobuf/*.proto" -o ./dist/bufBundle.js
pbts -m -o ./dist/bufBundle.d.ts ./dist/bufBundle.js
