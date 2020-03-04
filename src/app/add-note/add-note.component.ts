import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../Model/Note';
import { Person } from '../Model/Person';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note: Note = new Note();
  person: Person = new Person();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addNote() {
    // console.log('lancer');
    this.http.post('http://localhost:8088/note', this.note).subscribe(data => {

    }, err => {
      console.log(err);
    });

  }

}
