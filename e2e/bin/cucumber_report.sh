echo Create Cucumber report

export COMMON_CONFIG_FILE=env/common.env
yarn exec ts-node ./src/reporter/cucumber-report.ts
