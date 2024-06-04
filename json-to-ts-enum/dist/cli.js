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
var path_1 = __importDefault(require("path"));
var args = yargs_1.default.options({
    'input': { type: 'string', demandOption: true, alias: 'i' },
    'output': { type: 'string', demandOption: true, alias: 'o' },
    'enumName': { type: 'string', demandOption: true, alias: 'n' },
    'fileName': { type: 'string', demandOption: false, alias: 'f' },
    'obj': { type: 'boolean', demandOption: false, default: false, alias: 'js' }
}).argv;
var data = JSON.parse(fs_1.default.readFileSync(args.input, 'utf-8'));
var enumTemplate = "\nexport enum <%= enumName %> {\n<% for (const key in values) { -%>\n<% if (values[key].desc) { -%>\n    /* <%= values[key].desc %> */\n<% } -%>\n    <%= key %> = \"<%= values[key].value %>\",\n<% } -%>\n}\n";
var jsTemplate = "\ninterface <%= enumName %>ObjectType {\n    value: string;\n    desc: string;\n}\n\nexport const <%= enumName %>Object: Record<string, <%= enumName %>ObjectType> = {\n<% for (const key in values) { -%>\n    <%= key %>: {\n        value: \"<%= values[key].value %>\",\n        desc: \"<%= values[key].desc %>\"\n    },\n<% } -%>\n};\n";
var fileName = args.fileName || args.enumName;
var enumOptions = {
    enumName: args.enumName,
    values: data
};
var enumResult = ejs.render(enumTemplate, enumOptions);
var result = enumResult;
if (args.obj) {
    var jsOptions = {
        enumName: args.enumName,
        values: data
    };
    var jsResult = ejs.render(jsTemplate, jsOptions);
    result += jsResult;
}
fs_1.default.writeFileSync(path_1.default.join(args.output, "".concat(fileName, ".ts")), result, { encoding: 'utf-8' });
console.info("TypeScript enum ".concat(fileName, ".ts written to ").concat(args.output));
if (args.obj) {
    console.info("JavaScript object ".concat(fileName, ".ts appended to the file"));
}
