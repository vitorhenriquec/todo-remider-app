import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class TaskService{
    private tasks = new Array<Task>(
        {id: 0, description: "A", active:true},
        {id: 1, description: "B", active:true},
        {id: 2, description: "C", active:true},
        {id: 3, description: "D", active:true},
        {id: 4, description: "E", active:true},
    )

    getTasks(): Array<Task>{
        return this.tasks;
    }

    getTask(id: number): Task{
        return this.tasks.filter((task => task.id == id))[0]
    }
}

export class Task {
    constructor(public id: number, public description: string, public active: boolean) { }
}