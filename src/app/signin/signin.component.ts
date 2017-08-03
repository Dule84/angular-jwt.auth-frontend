import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    this.authService.signIn(form.value.email, form.value.password)
        .subscribe(
            tokenData => console.log(tokenData),
            error => console.log(error)
        );
    form.reset();
  }

}
