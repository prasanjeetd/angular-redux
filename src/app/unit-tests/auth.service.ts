export class AuthService {

    isAuthenticated(): boolean {

        return !!localStorage.getItem('token');
    }

    $isAuthenticated(): Promise<boolean> {

       /*  return new Promise(resolve => {
            resolve(!!localStorage.getItem('token'));
        }); */

        return Promise.resolve(!!localStorage.getItem('token'));
    }
}
