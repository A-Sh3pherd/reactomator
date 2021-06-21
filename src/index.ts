import * as inquirer from 'inquirer';


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