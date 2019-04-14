import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    template: `
        <a>
            <span *ngIf="needsLogin()">Login</span>
            <span *ngIf="!needsLogin()">Logout</span>
        </a>
        <span id="logintext" >
            <span *ngIf="isLogin">Billa</span>
        </span>
    `
})
export class LoginComponent implements OnInit {

    isLogin = false;

    constructor(private authService: AuthService) {

    }

    ngOnInit() {

        this.authService.$isAuthenticated().then((isAuthenticated: boolean) => {
            this.isLogin = isAuthenticated;
        });
        // let ap: () => Promise<boolean> = this.authService.$isAuthenticated;

    }

    needsLogin = (): boolean => {
        return !this.authService.isAuthenticated();
    }
}
