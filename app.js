const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

let comandArgv = argv._[0];

switch(comandArgv) {
    case 'create': 
        let task = toDo.createTask(argv.description);
        console.log(task)
    break;

    case 'list': 
        let listTask = toDo.getListTask(argv.completed);

        for (let task of listTask) {
            console.log('\n---------To-Do-----------'.brightCyan);
            console.log(task.description.brightWhite);
            console.log('State: '.magenta, task.completed);
            console.log('--------------------------'.brightCyan);
        }
    break;

    case 'update': 
        let updateTask = toDo.updateTask(argv.description, argv.completed);
        if(updateTask){
            console.log("Task Update")
        } else {
            console.log("Error, task not found")
        }
    break;

    case 'delete':
        let taskDelete = toDo.deleteTask(argv.description);
        if(taskDelete){
            console.log("Task deleted")
        } else {
            console.log("Error, task could not be deleted")
        }
    break;

    default:
        console.log('Command not recognized')
}