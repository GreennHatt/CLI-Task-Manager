class Task {
    constructor(){
        this.tasks= [];
    }
    addtask(Name){
        this.tasks.push(Name);
        console.log("Tasks added");
    }
    updatetask(index,newtask){
        if(index>=0 && index< this.tasks.length){
            this.tasks[index]=newtask;
            console.log("Task updated");
        }
        else {
            console.log("Invalid Task entry");
        }
    }
    deletetask(index){
        if(index>=0 && index< this.tasks.length){
            this.tasks.splice(index,1);
            console.log("Task deleted");
        }
        else {
            console.log("Invalid Task entry");
        }
    }
    displaytask(){
        console.log("\nTasks Available Are ");
        
        for (let i=0 ; i< this.tasks.length; i++){
            console.log((i+1) + " . " + this.tasks[i] );
        }
    }

}
export default Task;