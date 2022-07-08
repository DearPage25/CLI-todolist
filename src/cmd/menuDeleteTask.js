const colors = require("colors");
const inquirer = require("inquirer");


const menuDeleteTask = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.green
        return {
            value: task.id,
            name: `${idx}. ${task.desc}`
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });
    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Selecionar tarea a elminar',
            choices
        }
    ];

    const {id} = await inquirer.prompt(question);
    return id;

}
const confirmDialog = async (message = '') => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}


module.exports = {
    menuDeleteTask,
    confirmDialog
}