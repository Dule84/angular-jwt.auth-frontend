/**
 * Created by Dule on 30/07/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }
    signUp(name: string, email: string, password: string) {
        return this.http.post('http://localhost:8000/api/user', {name: name, email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }
    signIn(email: string, password: string) {
        return this.http.post('http://localhost:8000/api/user/sign', {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );
    }
    getLogout(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.get('http://localhost:8000/api/logout?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().token;
                }
            );
    }
    getToken() {
        return localStorage.getItem('token');
    }
}