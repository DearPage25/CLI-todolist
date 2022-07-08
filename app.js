const { menuCompleteTask } = require("./src/cmd/menuCompleteTask");
const { menuDeleteTask, confirmDialog } = require("./src/cmd/menuDeleteTask");
const { menuPrincipal, pause, readInput } = require("./src/cmd/menuPrincipal");
const { saveData, readData } = require("./src/db/controller.data");
const Task = require("./src/models/task");
const Tasks = require("./src/models/tasks");

const tasks = new Tasks();
const tasksDB = readData();
const main = async () => {
  console.clear();

  if (tasksDB) {
    tasks.loadTaskFromArray(tasksDB);
  }
  let opt = "";
  do {
    opt = await menuPrincipal();

    switch (opt) {
      case "1":
        const desc = await readInput("Descripcion: ");
        tasks.createTask(desc);
        break;
      case "2":
        tasks.formatList();
        break;
      case "3":
        tasks.filterList(false);
        break;
      case "4":
        tasks.filterList(true);
        break;
      case "5":
        const ids = await menuCompleteTask(tasks.listArr);
        tasks.toggleComplete(ids);
        break;
      case "6":
        const idTask = await menuDeleteTask(tasks.listArr);
        if (idTask !== "0") {
          const ok = await confirmDialog("Desea borrar esta tarea?");
          if (ok) tasks.eliminatedTask(idTask);
          console.log("La tarea fue eliminada.");
        }

        break;
      default:
        break;
    }

    saveData(tasks.listArr);
    await pause();
  } while (opt !== "0");
};

main();
