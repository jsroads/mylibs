#!/usr/bin/env node
import yargs from 'yargs';
import fs from 'fs';
import * as ejs from 'ejs';
import dirname from 'path';
import fileURLToPath from 'url';

const args = yargs.options({
    'input': { type: 'string', demandOption: true, alias: 'i'},
    'output': { type: 'string', demandOption: true, alias: 'o'},
    'enumName': { type: 'string', demandOption: true, alias: 'n'},
    'fileName': { type: 'string', demandOption: false, alias: 'f'}
}).argv;

const data = JSON.parse(fs.readFileSync(args.input, 'utf-8'));
// const template = "export enum <%= enumName %> { \n" +
//                  "<% for (var prop in values) { if (Object.prototype.hasOwnProperty.call(values, prop)) { %>" +
//                  "  <%- prop.toUpperCase() %> = \"<%- values[prop] %>\",\n" +
//                  "<%   }} %>\n" +
//                  "}"

const template = "export enum <%= enumName %> { \n" +
    "<% for (var prop in values) { if (Object.prototype.hasOwnProperty.call(values, prop)) { %>" +
    "  <%- prop %> = \"<%- values[prop] %>\",\n" +
    "<%   }} %>\n" +
    "}"

const temp = Object.keys(data);
let keys: string[] = []
// temp.forEach(key => keys.push(key.toUpperCase()));
temp.forEach(key => keys.push(key));

const fileName = args.fileName || args.enumName;

const options = {
    enumName: args.enumName,
    keys: keys,
    values: data,
    fileName: fileName
};

const result = ejs.render(template, options);

fs.writeFileSync(args.output + `/${options.fileName}.ts`, result, { encoding: 'utf-8'});

console.info(`TypeScript enum ${options.enumName}.ts written to ${args.output}`);