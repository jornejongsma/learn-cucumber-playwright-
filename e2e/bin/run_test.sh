#!/usr/bin/env bash

#pre-cucumber
bin/clean_reports.sh

#cucumber tag
tag=$1

export COMMON_CONFIG_FILE=env/common.env
yarn cucumber-js --profile $tag

#Create Cucumber report
bin/cucumber_report.sh


