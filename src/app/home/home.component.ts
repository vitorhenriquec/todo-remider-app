import {Component} from "@angular/core"

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    moduleId: module.id
})

export class HomeComponent{
    task = ''
    tasks = []

    onSetTask(){
        this.tasks.push({
            description: this.task,
            active: true
        });
    }
}