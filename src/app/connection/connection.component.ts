import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  user;
  person: Person = new Person();
  constructor(private http: HttpClient,  private router: Router) { }

  ngOnInit(): void {
  }

  checkPerson() {
    this.http.post('http://localhost:8088/person', this.person)
      .subscribe(data => {
        this.user = data;
        if (this.user.mdp != null) {
          this.router.navigate(['/note']);

        } else { console.log("nop"); }
      }, err => {
        console.log(err);
      });

  }

}
