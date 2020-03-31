import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= ''
  password=''

  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Dependency Injection
  constructor(private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.authenticationService.isUserAuthenticated(this.username, this.password).subscribe(
      authenticated => {
        if(authenticated) {
          this.router.navigate(['home',this.username]);
          this.invalidLogin = false;		  
		    } else {
			    this.invalidLogin = true;
		    }
	    }
    );
  } 
}
