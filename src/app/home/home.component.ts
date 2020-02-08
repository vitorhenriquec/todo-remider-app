import {Component, OnInit} from "@angular/core"
import { Task, TaskService } from "../services/task-service";

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
        console.log(this.tasks);
    }

    addTask(){
        //let newTask = new Task(0,this.description,true);
        //this.tasks.push(newTask);
        //this.description = '';
    }
}