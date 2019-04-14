import { LoginComponent } from './login-logout.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component: login and logout', () => {


    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let authService: AuthService;
    let el: DebugElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [],
            declarations: [LoginComponent],
            providers: [AuthService]
        });

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.get(AuthService);

        el = fixture.debugElement.query(By.css('a'));

    });

    it('login button hidden when the user is authenticated', () => {
        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        spyOn(authService, 'isAuthenticated').and.returnValue(true);
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });

});
