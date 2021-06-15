#!/usr/bin/env node
// import * as inquirer from 'inquirer';
import {program} from 'commander';
import * as fs from 'fs';

// Template
const createJsxTemplate = require('./template/component');

//
function generateComponent(compName: string) {
    const jsxTemplate = createJsxTemplate(compName);
    // Creating empty folder
    fs.mkdirSync(compName, {recursive: true});
    console.log(`${compName} Folder was successfully Created`);
    // Creating the template
    fs.writeFileSync(`${compName}/${compName}.jsx`, jsxTemplate);
    fs.writeFileSync(`${compName}/${compName}.css`, ``);
    console.log(`Component was successfully made!`);
}

// Commander
program
    .version('1.0.0')
    .description('At the moment its bullshit, but...');

program
    .command('generate <componentName>')
    .alias('g')
    .action(compName => {
        compName.includes('/') && compName.split('/')
        generateComponent(compName)
        console.log(compName);
    })
program.parse(process.argv)

