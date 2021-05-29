import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableTodoComponent } from './table-todo/table-todo.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { ToastrModule } from 'ngx-toastr';
import { MessageValidControlComponent } from './shared/components/message-valid-control/message-valid-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TableTodoComponent,
    FormUsuarioComponent,
	 MessageValidControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
