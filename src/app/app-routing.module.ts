import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { NoteComponent } from './note/note.component';
import {ConnectionComponent} from './connection/connection.component'

const routes: Routes = [
  {path : 'inscription', component : InscriptionComponent},
  {path : 'note', component : NoteComponent},
  {path : 'connection', component : ConnectionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
