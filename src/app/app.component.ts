import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  todos: Array<Todo>;

  constructor(private http: Http) {
    this.http.get("https://gorest.co.in/public/v2/todos ").subscribe((data) => {
      this.todos = [data.json().filter((x) => x.status === "pending")[1]];
    });
  }

  headers: string[] = ["Id", "User ID", "Title", "Due on", "Status"];
}
export interface Todo {
  id: number;
  user_id: number;
  title: string;
  due_on: Date;
  status: string;
}
