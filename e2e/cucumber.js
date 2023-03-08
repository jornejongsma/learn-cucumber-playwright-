const os = require('os')

const cpuCount = os.cpus().length
const cpuCountUsed = cpuCount / 2

console.log(`Running on ${cpuCountUsed} of ${cpuCount} cores.`)

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require src/step-definitions/**/**/*.ts \
                -f json: ./reports/report.json \
                --format progress-bar`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

module.exports = { dev, smoke, regression}