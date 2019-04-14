import { AuthService } from './auth.service';

describe('Authservice test', () => {

    let authService: AuthService;

    beforeEach(() => {
        authService = new AuthService();
    });

    afterEach(() => {
        authService = null;
        localStorage.removeItem('token');
    });

    it('It should have localstoarge item', () => {

        localStorage.setItem('token', '123');

        expect(authService.isAuthenticated()).toBeTruthy();

    });

    it('It should not have localstoarge item', () => {

        expect(authService.isAuthenticated()).toBeFalsy();

    });


});
