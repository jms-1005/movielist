import { Component, OnInit } from '@angular/core';

interface Movie{
  name:string;
  releaseDate: Date
}

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  someProperty = "Hey all";
  firstName:string = '0';
  lastName:string = '1';

  email:string;
  password:string;

  printFullname(){
    console.log(this.firstName + ' ' + this.lastName)
    this.firstName = "Bill";
    this.lastName = "Gates";
    return this.firstName + ' ' + this.lastName;
  }

  print(){
    console.log(this.someProperty);
  }

  verifyLogin(){
    if(this.email.length < 5)
      console.error('email error');
    if(this.password.length < 6)
      console.error('password length insufficient');

    this.email = "bill.clinton@usa.gov";
    console.log('Your data entered is ', this.email, this.password);
  }

  movieList:Movie[] = [
    {
      name: "Titanic",
      releaseDate: new Date("01/01/1998")
    },
    {
      name: "Avatar 2",
      releaseDate: new Date("04/09/2022")
    },
    {
      name: "Boss baby 2",
      releaseDate: new Date("01/03/2021")
    },
    {
      name: "Boss baby 3",
      releaseDate: new Date("01/01/2025")
    }
  ]

  // Method to check if a date is past or future
  isFuture(date:Date){
    let todaysDate = new Date();
    //if date is greater than today then its future. So return true
    if(date > todaysDate)
      return true
    else
      return false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
