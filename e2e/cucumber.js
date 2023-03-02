const os = require('os')

const cpuCount = os.cpus().length
const cpuCountUsed = cpuCount / 2

console.log(`Running on ${cpuCountUsed} of ${cpuCount} cores.`)

const common = `
    --require-module ts-node/register
    --require src/step-definitions/**/**/*.ts
`

module.exports = {
    default: `${common}`
}