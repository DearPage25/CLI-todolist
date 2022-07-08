const colors = require("colors");
const inquirer = require("inquirer");


const menuCompleteTask = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.green
        return {
            value: task.id,
            name: `${idx}. ${task.desc}`,
            checked: task.isDone
        }
    });
   
    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(question);
    return ids;

}



module.exports = {
    menuCompleteTask,
   
}