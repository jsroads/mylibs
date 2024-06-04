import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';
import yargs from 'yargs';

// Define arguments
const argv = yargs
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
    .argv as any;

// Get the file path from the command line arguments
const filePath = argv._[0];
const sheetName = argv.sheet;
const keyColumn = argv.key;

if (!filePath) {
    console.error('Please provide the path to the Excel file.');
    process.exit(1);
}

if (!fs.existsSync(filePath)) {
    console.error('File does not exist:', filePath);
    process.exit(1);
}

// Read the Excel file
const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets[sheetName];

if (!sheet) {
    console.error(`Sheet "${sheetName}" does not exist in the file.`);
    process.exit(1);
}

// Convert sheet to JSON
const sheetData:any = XLSX.utils.sheet_to_json(sheet);

// Determine key column if not specified
const keyCol = keyColumn || Object.keys(sheetData[0])[0];

// Transform the data
const jsonData = sheetData.reduce((acc:any, row:any) => {
    const key = row[keyCol];
    const values = Object.keys(row).filter(col => col !== keyCol);

    if (values.length === 1) {
        acc[key] = row[values[0]];
    } else {
        acc[key] = values.reduce((obj:any, col) => {
            obj[col] = row[col];
            return obj;
        }, {});
    }

    return acc;
}, {});

// Write to JSON file
const outputFilePath = path.join(path.dirname(filePath),path.basename(filePath, path.extname(filePath)) + '.json');
fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2), 'utf8');

console.log(`JSON data has been written to ${outputFilePath}`);
