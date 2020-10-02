const fs = require('fs');

let listTask = [];

const saveDB = () => {
    let data = JSON.stringify(listTask);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) 
            reject(err);
    });
}

const getDB = () => {
    try {
        listTask = require('../db/data.json');
    } catch (error) {
        listTask = [];
    }
}

const createTask = (description) => {
    getDB();

    let newTask = {
        description,
        completed: false
    };
    listTask.push(newTask);

    saveDB();

    return newTask;
}

const getListTask = (stateTask) => {
    getDB();

    let filterTask = listTask.filter(task => task.completed.toString() == stateTask);

    return filterTask;
}

const updateTask = (description, completed = true) => {
    getDB();

    let index = listTask.findIndex(task => task.description === description);

    if(index >= 0) {
        listTask[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {
    getDB();

    let newListTask = listTask.filter(task => task.description !== description);
    
    if(newListTask.length === listTask.length) {
        return false;
    } else {
        listTask = newListTask;
        saveDB();
        return true;
    }
}

module.exports = {
    createTask,
    getListTask,
    updateTask,
    deleteTask
}