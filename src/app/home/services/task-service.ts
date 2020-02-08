import { Injectable } from "@angular/core";
import {request, HttpResponse } from "tns-core-modules/http";
import {api} from "./api"

@Injectable({
    providedIn: "root"
})
export class TaskService{
    private tasks: Array<Task> = new Array<Task>()

    getTasks(){
        request({
            url: `${api.baseURL}/task`,
            method: "GET"
        }).then((response: HttpResponse) => {
            this.tasks = response.content.toJSON();
            console.log("@", this.tasks);
        }, (e) => {
            this.tasks = []
        });
        console.log("@", this.tasks);
        return this.tasks;
    }
}

export class Task {
    constructor(public id: number, public description: string, public active: boolean) { }
}