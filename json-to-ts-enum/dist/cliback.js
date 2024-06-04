#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var fs_1 = __importDefault(require("fs"));
var ejs = __importStar(require("ejs"));
var args = yargs_1.default.options({
    'input': { type: 'string', demandOption: true, alias: 'i' },
    'output': { type: 'string', demandOption: true, alias: 'o' },
    'enumName': { type: 'string', demandOption: true, alias: 'n' },
    'fileName': { type: 'string', demandOption: false, alias: 'f' }
}).argv;
var data = JSON.parse(fs_1.default.readFileSync(args.input, 'utf-8'));
// const template = "export enum <%= enumName %> { \n" +
//                  "<% for (var prop in values) { if (Object.prototype.hasOwnProperty.call(values, prop)) { %>" +
//                  "  <%- prop.toUpperCase() %> = \"<%- values[prop] %>\",\n" +
//                  "<%   }} %>\n" +
//                  "}"
var template = "export enum <%= enumName %> { \n" +
    "<% for (var prop in values) { if (Object.prototype.hasOwnProperty.call(values, prop)) { %>" +
    "  <%- prop %> = \"<%- values[prop] %>\",\n" +
    "<%   }} %>\n" +
    "}";
var temp = Object.keys(data);
var keys = [];
// temp.forEach(key => keys.push(key.toUpperCase()));
temp.forEach(function (key) { return keys.push(key); });
var fileName = args.fileName || args.enumName;
var options = {
    enumName: args.enumName,
    keys: keys,
    values: data,
    fileName: fileName
};
var result = ejs.render(template, options);
fs_1.default.writeFileSync(args.output + "/".concat(options.fileName, ".ts"), result, { encoding: 'utf-8' });
console.info("TypeScript enum ".concat(options.enumName, ".ts written to ").concat(args.output));
