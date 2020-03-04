import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { NoteComponent } from './note/note.component';


const routes: Routes = [
  {path : 'inscription', component : InscriptionComponent},
  {path : 'note', component : NoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
