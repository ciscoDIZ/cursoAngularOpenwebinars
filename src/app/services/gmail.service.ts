import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private http: HttpClient, private login: LoginService) { }

  public getRecibidos() {
    const url = 'https://www.googleapis.com/gmail/v1/users' + this.login.uid + '/messages?';
    const authToken = this.login.tokenUser;
    console.log(this.login.uid);
    const headers = new HttpHeaders({
      'Acces-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      Authorization: `Bearer ${authToken}`
    });
    return this.http.get(url, {headers:headers});
  }

  public getMessage(id: string) {
    const url = 'https://www.googleapis.com/gmail/v1/users' + this.login.uid + '/messages/' + id;
    const authToken = this.login.tokenUser;
    const headers = new HttpHeaders({
      'Acces-Control-Allow-Origin': 'http://localhost:4200',
      Authorization: `Bearer ${authToken}`
    });
    let params = new HttpParams();
    params = params.append('format', 'full');
    return this.http.get(url, {headers, params});
  }

  public sendMessage(text: string, to: string, subject: string) {
    const url = 'https://www.googleapis.com/gmail/v1/users/' + this.login.uid + '/messages/send/';
    const authToken = this.login.tokenUser;
    const headers = new HttpHeaders({
      'Acces-Control-Allow-Origin': 'http://localhost:4200',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    });
    const emailTemplate = 'Content-Type:  text/plain; charset=\"UTF-8\"\nContent-length: 5000\nContent-Transfer-Encoding: message/rfc2822\n'
      + `To: ${to}\n` +
      `Subject: ${subject}\n\n` +
      `${text}`;
    const base64EncodedEmail = btoa(emailTemplate).replace(/\+/g, '-').replace(/\//g, '_');

    return this.http.post(url, { raw: base64EncodedEmail }, { headers } );
  }
}
