const colors = require("colors");
const inquirer = require("inquirer");
// const {optMenuPrincipal} = require('../types/typesOptions')
const menuPrincipal = async () => {
  const answer = [
    {
      type: "list",
      name: "opcion",
      message: "Seleccionar una opcion",
      loop: false,
      choices: [
        {
          value: "1",
          name: "1. Crear tarea",
        },
        {
          value: "2",
          name: "2. Listar tarea",
        },
        {
          value: "3",
          name: "3. Listar tareas Pendientes",
        },
        {
          value: "4",
          name: "4. Listar tareas Completadas",
        },
        {
          value: "5",
          name: "5. Completar tarea",
        },
        {
          value: "6",
          name: "6. Borrar tarea",
        },
        {
          value: "0",
          name: "0. Salir \n",
        },
      ],
    },
  ];

  console.clear();
  console.log(colors.green("================================== \n"));
  console.log(colors.green("  Seleccione la opcion deseada\n"));
  console.log(colors.green("================================== \n"));

  const { opcion } = await inquirer.prompt(answer);
  return opcion;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "opcion",
      message: `\n Precione ${colors.green("Enter")} para continuar \n`,
    },
  ];

  await inquirer.prompt(question);
};

const readInput = async (message) => {

  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate( value ) {
        if( value.length === 0 ) {
            return 'Por favor ingrese un valor';
        }
        return true;
    }
    },
  ];


  const { desc } = await inquirer.prompt(question);

  return desc;
};

module.exports = {
  menuPrincipal,
  pause,
  readInput,
};
