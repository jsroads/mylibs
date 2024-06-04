#!/usr/bin/env node
import yargs from 'yargs';
import fs from 'fs';
import * as ejs from 'ejs';
import path from 'path';

const args = yargs.options({
    'input': { type: 'string', demandOption: true, alias: 'i' },
    'output': { type: 'string', demandOption: true, alias: 'o' },
    'enumName': { type: 'string', demandOption: true, alias: 'n' },
    'fileName': { type: 'string', demandOption: false, alias: 'f' },
    'obj': { type: 'boolean', demandOption: false, default: false, alias: 'js' }
}).argv;

const data = JSON.parse(fs.readFileSync(args.input, 'utf-8'));

const enumTemplate = `
export enum <%= enumName %> {
<% for (const key in values) { -%>
<% if (values[key].desc) { -%>
    /* <%= values[key].desc %> */
<% } -%>
    <%= key %> = "<%= values[key].value %>",
<% } -%>
}
`;

const jsTemplate = `
interface <%= enumName %>ObjectType {
    value: string;
    desc: string;
}

export const <%= enumName %>Object: Record<string, <%= enumName %>ObjectType> = {
<% for (const key in values) { -%>
    <%= key %>: {
        value: "<%= values[key].value %>",
        desc: "<%= values[key].desc %>"
    },
<% } -%>
};
`;

const fileName = args.fileName || args.enumName;

const enumOptions = {
    enumName: args.enumName,
    values: data
};

const enumResult = ejs.render(enumTemplate, enumOptions);

let result = enumResult;

if (args.obj) {
    const jsOptions = {
        enumName: args.enumName,
        values: data
    };
    const jsResult = ejs.render(jsTemplate, jsOptions);
    result += jsResult;
}

fs.writeFileSync(path.join(args.output, `${fileName}.ts`), result, { encoding: 'utf-8' });

console.info(`TypeScript enum ${fileName}.ts written to ${args.output}`);
if (args.obj) {
    console.info(`JavaScript object ${fileName}.ts appended to the file`);
}
