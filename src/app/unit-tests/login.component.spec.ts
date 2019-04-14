import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

describe('Component : Login()', () => {

    let component: LoginComponent;
    let authService: AuthService;
    let spy: any;

    beforeEach(() => {

        authService = new AuthService();
        component = new LoginComponent(authService);
    });

    afterEach(() => {

        authService = null;
        component = null;
    });

    it('canLogin return false when the user', () => {

        spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);

        expect(component.needsLogin()).toBeTruthy();
        expect(authService.isAuthenticated).toHaveBeenCalled();

    });

});



