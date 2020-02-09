import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import {API} from "./api"

@Injectable({
    providedIn: "root"
})
export class TaskService{

    constructor(private http: HttpClient){}

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }

    getAll(): Observable<Task[]>{
        return this.http.get<Task[]>(`${API.baseURL}/task`);
    }

    save(task: Task): Observable<Task>{
        return this.http.post<Task>(`${API.baseURL}/task`, task, {headers: this.createRequestOptions()});
    }

    update(taskId): Observable<Task>{
        return this.http.put<Task>(`${API.baseURL}/task/${taskId}`, {headers: this.createRequestOptions()});
    }

    delete(taskId){
        return this.http.delete(`${API.baseURL}/task/${taskId}`, {headers: this.createRequestOptions()});
    }
}

export class Task {
    constructor( 
        public id: number,
        public description: string,
        public active: boolean
    ){}
}