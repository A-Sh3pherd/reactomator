#!/usr/bin/env node
import * as Fs from "fs";
import { Inquirer } from "inquirer";
const inquirer: Inquirer = require('inquirer');
import * as path from 'path';

const createJsxTemplate = require('./src/templates/component')

async function getAnswers() {
    const answers: { compName: string } = await inquirer.prompt([
        {
            type: 'input',
            name: 'compName',
            message: 'What is the name of the component??',
            choices: ['component', 'something-else'],
            default: 'component'
        },
    ])
    return {
        compName: answers.compName,
    }
}

// Execution
getAnswers()
    .then(({ compName }) => {
        // Current working directory
        const location = path.basename(process.cwd());
        console.log(`Location:  ${location}`);
        console.log(`Comp name: ${compName}`);

        const jsxTemplate = createJsxTemplate(compName);
        // Creating empty folder
        Fs.mkdirSync(compName);
        console.log(`${compName} Folder was successfully Created`);
        // Creating the template
        Fs.writeFileSync(`${compName}/${compName}.jsx`, jsxTemplate);
        Fs.writeFileSync(`${compName}/${compName}.css`, ``);
        console.log(`Component was successfully made!`);
    });



