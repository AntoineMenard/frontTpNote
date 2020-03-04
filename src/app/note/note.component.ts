import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8088/note').subscribe(data => {
    console.log(data);
    this.note = data;
      }, err => {
        console.log(err);
      });

  }

  openDialog() {
    const mydial = this.dialog.open(AddNoteComponent);
}

}
