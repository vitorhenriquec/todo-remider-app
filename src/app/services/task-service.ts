import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {API} from "./api"

@Injectable({
    providedIn: "root"
})
export class TaskService{

    constructor(private http: HttpClient){}

    getAll(): Observable<Task[]>{
        return this.http.get<Task[]>(`${API.baseURL}/task`);
    }
}

export interface Task {
    id: number,
    description: string,
    active: boolean,
}