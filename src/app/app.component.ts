import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";
import { Observable, of, from, pipe } from "rxjs";
import { map, tap, share } from "rxjs/operators";
export class Person {
  name: string;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  response1: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
  }


  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts1/1").subscribe((data)=>{
      this.response1= data;
    })
  }
}
