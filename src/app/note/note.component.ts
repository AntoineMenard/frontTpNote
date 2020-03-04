import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8087/note').subscribe(data => {
    console.log(data);
    this.note = data;
      }, err => {
        console.log(err);
      });

  }

}
