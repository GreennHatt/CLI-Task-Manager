class Task {
    constructor(Name,deadline){
        this.name=Name ;
        this.deadline=deadline ;
    }
    addtask(task){
        this.task.push(new task(Name));
    }
    updatetask(task){
        this.task.copy(task)
    }

}
const task=new Task();
task.addtask("Java",6);
manager.addtask();