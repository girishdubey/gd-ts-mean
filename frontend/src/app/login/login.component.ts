import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {LoginService} from '../user/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userdata: {
        email: string;
        password: string;
      } = {
        email: 'superadmin@apams.com',
        password: 'apams@123'
      };

    constructor(public router: Router, private userService: LoginService) {}

    ngOnInit() {}

    onLoggedin() {
        //localStorage.setItem('isLoggedin', 'true');
        this.userService.logIn(this.userdata.email, this.userdata.password);
    }
}
