import {Component, OnInit} from "@angular/core"
import { Task, TaskService } from "../services/task-service";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toast";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    moduleId: module.id,
})

export class HomeComponent implements OnInit{
    
    public description: string = '';
    public tasks: Task[];

    constructor(private taskService: TaskService){}

    ngOnInit(): void{
        this.taskService.getAll().subscribe(tasks => this.tasks = tasks);
        this.tasks.sort(this.sortById)
    }

    addTask(): void{
        const newTask: Task = new Task(0,this.description,true);
        this.taskService.save(newTask).subscribe(task => {
            this.tasks.push(task);
            this.description = '';
            Toast.makeText(`Task ${task.description} created.`).show();
            this.ngOnInit();
        });
    }

    updateTask(id): void{
        const taskFound: Task = this.tasks.find(task => task.id == id);
        const disableMessage = taskFound.active ? "disable": 'active';
        this.taskService.update(id).subscribe(task => {
            Toast.makeText(`Task ${task.description} updated. Now is ${disableMessage}`).show();
            this.ngOnInit();
        });
    }

    taskStyle(active: Boolean): string{
        if(active){
            return 'taskItem'
        }
        return 'taskItemDisable'
    }

    sortById(a,b){
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    }

    deleteTask(id): void{
        const taskFound: Task = this.tasks.find(task => task.id == id);
        dialogs.confirm({
            title: "Remove task",
            message: `Are you sure you want to remove the task with description: ${taskFound.description}`,
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
        }).then(result => {
            if(result){
                this.taskService.delete(id).subscribe(item => {
                    this.tasks.filter(task => task.id != id);
                    Toast.makeText("Task removed").show();
                    this.ngOnInit(); 
                });
            }
        });
    }
}