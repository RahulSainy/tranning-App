import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
maxDate;
  constructor() { }

  ngOnInit(): void {
    this.maxDate =new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 13)
  }
  onSubmit(form :NgForm){
    console.log(form)
  }
}
