import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    HttpClient
  ],
  exports:[
TodoComponent
  ],
  providers: [ HttpClientModule, HttpClient],
})
export class TodoModule { }
