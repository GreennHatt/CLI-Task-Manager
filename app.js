import Task from "./Task.js"
const task= new Task();
console.log("-----CLI TASK MANAGER------");
task.addtask("learn JS");
task.addtask("Learn ES modules");
task.displaytask();
task.updatetask(2,"Learn git and Git Hub");
task.deletetask(1);
task.displaytask();