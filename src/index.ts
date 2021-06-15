import * as inquirer from 'inquirer';

export interface question {
    type: '',
    name: '',
    message: '',
    default: '',
}

inquirer.prompt([
    {
        type: 'list',
        name: 'name',
        message: 'What would you like to do ?',
        choices: ['Start new project', 'Generate', 'Something else that`s cool'],
        default: 'Not telling ya.',
    }
]).then(answers => {
    console.log(answers);
    console.log(process.argv);

})