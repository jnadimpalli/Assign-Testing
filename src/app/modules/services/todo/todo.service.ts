import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodoList(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
 }
}
