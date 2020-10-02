const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'Marks a task as completed or pending'
}

const argv = require('yargs')
                    .command('create', 'Create a task to do',{
                        description
                    })
                    .command('update', 'Update task status',{
                        description,
                        completed
                    })
                    .command('delete', 'Delete task',{
                        description    
                    })
                    .help()
                    .argv;

module.exports = {
    argv
}