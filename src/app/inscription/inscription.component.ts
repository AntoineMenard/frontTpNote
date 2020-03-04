import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/Person';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  person: Person = new Person();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addPerson() {
    this.http.post('http://localhost:8088/createperson', this.person)
    .subscribe(data => {

    }, err => {
      console.log(err);
    });

  }

}
