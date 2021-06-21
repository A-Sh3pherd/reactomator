#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
// import * as inquirer from 'inquirer';
var commander_1 = require("commander");
var fs = __importStar(require("fs"));
// Template
var createJsxTemplate = require('./template/component');
//
function generateComponent(compName) {
    var jsxTemplate = createJsxTemplate(compName);
    // Creating empty folder
    fs.mkdirSync(compName, { recursive: true });
    console.log(compName + " Folder was successfully Created");
    // Creating the template
    fs.writeFileSync(compName + "/" + compName + ".jsx", jsxTemplate);
    fs.writeFileSync(compName + "/" + compName + ".css", "");
    console.log("Component was successfully made!");
}
// Commander
commander_1.program
    .version('1.0.0')
    .description('At the moment its bullshit, but...');
commander_1.program
    .command('generate <componentName>')
    .alias('g')
    .action(function (compName) {
    compName.includes('/') && compName.split('/');
    generateComponent(compName);
    console.log(compName);
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=component.js.map