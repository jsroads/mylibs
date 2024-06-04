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
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var XLSX = __importStar(require("xlsx"));
var yargs_1 = __importDefault(require("yargs"));
// Define arguments
var argv = yargs_1.default
    .option('s', {
    alias: 'sheet',
    description: 'The sheet name to be converted',
    type: 'string',
    default: 'Sheet1'
})
    .option('key', {
    description: 'The column name to be used as key',
    type: 'string',
    default: null
})
    .demandCommand(1)
    .help()
    .alias('help', 'h')
    .argv;
// Get the file path from the command line arguments
var filePath = argv._[0];
var sheetName = argv.sheet;
var keyColumn = argv.key;
if (!filePath) {
    console.error('Please provide the path to the Excel file.');
    process.exit(1);
}
if (!fs.existsSync(filePath)) {
    console.error('File does not exist:', filePath);
    process.exit(1);
}
// Read the Excel file
var workbook = XLSX.readFile(filePath);
var sheet = workbook.Sheets[sheetName];
if (!sheet) {
    console.error("Sheet \"".concat(sheetName, "\" does not exist in the file."));
    process.exit(1);
}
// Convert sheet to JSON
var sheetData = XLSX.utils.sheet_to_json(sheet);
// Determine key column if not specified
var keyCol = keyColumn || Object.keys(sheetData[0])[0];
// Transform the data
var jsonData = sheetData.reduce(function (acc, row) {
    var key = row[keyCol];
    var values = Object.keys(row).filter(function (col) { return col !== keyCol; });
    if (values.length === 1) {
        acc[key] = row[values[0]];
    }
    else {
        acc[key] = values.reduce(function (obj, col) {
            obj[col] = row[col];
            return obj;
        }, {});
    }
    return acc;
}, {});
// Write to JSON file
var outputFilePath = path.join(path.dirname(filePath), path.basename(filePath, path.extname(filePath)) + '.json');
fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2), 'utf8');
console.log("JSON data has been written to ".concat(outputFilePath));
