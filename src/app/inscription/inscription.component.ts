import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  person: Person = new Person();
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addPerson() {
    this.http.post('http://localhost:8088/createperson', this.person)
    .subscribe(data => {
     


    }, err => {
      console.log(err);
    });
    this.router.navigate(['/note']);
  }

  goToConnection() {
    this.router.navigate(['/note']);
  }

}
