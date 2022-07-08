const Task = require('./task');
const colors = require('colors');
class Tasks {

    
    constructor() {
       this._list = {} 
    };

    

    get listArr() {
        return Object.keys(this._list).map(task => this._list[task])
    }
    createTask(desc) {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    eliminatedTask(id = '') {
        if (this._list[id]) {
           delete this._list[id]
        }  

        
    }

    loadTaskFromArray(tasks = []) {
        tasks.forEach((task) => {
            this._list[task.id] = task;
        });
    }

    formatList(list = this.listArr) {
        list.forEach((task, index) => {
            
            const i = `${index + 1}`.green;
            const { desc, isDone } = task;
            const state = (isDone)
                ? 'Completed'.green
                : 'Incompleted'.red
            console.log(`${i}. ${desc} :: ${state}`)
        });
    }

    filterList(isDone = true) {
        const list = this.listArr.filter((task, index) => 
            task.isDone == isDone 
        );
        this.formatList(list);
    }

    toggleComplete(ids = []) {
        ids.forEach(id => {
            const task = this._list[id];

            if (!task.isDone) {
                task.isDone = !task.isDone;
            }
        });

        this.listArr.forEach(task => {
            if(!ids.includes(task.id)) this._list[task.id].isDone = false;
        });
    }
};

module.exports = Tasks