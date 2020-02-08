import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
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
}

export class Task {
    constructor( 
        public id: number,
        public description: string,
        public active: boolean
    ){}
}