const os = require('os');
const dotenv = require('dotenv');
const fs = require('fs');
// import {
//     GlobalConfig,
//     HostsConfig,
//     PagesConfig,
//     PageElementMappings
// } from "./src/env/global";

dotenv.config({path: process.env['COMMON_CONFIG_FILE']})

const getJsonFromFile = (path) => require(`${process.cwd()}${path}`)

const hostsConfig = getJsonFromFile(process.env['HOSTS_URL_PATH'])
const pagesConfig = getJsonFromFile(process.env['PAGES_URL_PATH'])
const mappingFiles = fs.readdirSync(`${process.cwd()}${process.env['PAGE_ELEMENTS_PATH']}`)

const pageElementMappings = mappingFiles.reduce((pageElementConfigAcc, file) => {
    const key = file.replace('.json',  '')
    const elementMappings = getJsonFromFile(`${process.env['PAGE_ELEMENTS_PATH']}${file}`)
    return {...pageElementConfigAcc, [key]: elementMappings}
}, {})

const worldParameters = {
    hostsConfig,
    pagesConfig,
    pageElementMappings
}



const cpuCount = os.cpus().length;
const cpuCountUsed = cpuCount / 2;

console.log(`Running on ${cpuCountUsed} of ${cpuCount} cores.`);

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

module.exports = { dev, smoke, regression};