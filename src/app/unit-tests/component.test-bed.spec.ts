import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';


fdescribe('Component Login() by TestBed', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                LoginComponent
            ],
            providers: [
                AuthService
            ]
        });

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.get(AuthService);
    });

    it('canLogin returns false when the user is not authenticated', () => {

        spyOn(authService, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(authService.isAuthenticated).toHaveBeenCalled();

    });

});
