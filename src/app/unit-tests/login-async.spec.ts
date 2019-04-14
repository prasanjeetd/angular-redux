import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login-logout.component';
import { DebugElement } from '@angular/core';
import { AuthService } from './auth.service';
import { By } from '@angular/platform-browser';


fdescribe('Component : Async tests', () => {

    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let authService: AuthService;
    let el: DebugElement;


    beforeEach(function () {

        TestBed.configureTestingModule({
            imports: [],
            declarations: [LoginComponent],
            providers: [AuthService]
        });

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.get(AuthService);
        el = fixture.debugElement.query(By.css('#logintext'));

    });

    fit('It should show login message : fail', () => {

        spyOn(authService, '$isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Billa');

    });

    fit('It should show login message :pass', () => {

        const spy = spyOn(authService, '$isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();

        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges();
            expect(el.nativeElement.textContent.trim()).toBe('Billa');

        });

    });

});
