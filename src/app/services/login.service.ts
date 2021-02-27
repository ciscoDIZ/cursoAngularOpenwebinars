import {Injectable, NgZone} from '@angular/core';
import {GoogleAuthService} from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public static readonly SESSION_STORAGE_KEY: string = 'googleUser';

  profile: any = undefined;
  tokenUser: string;
  uid: string;
  constructor(public googleAuthService: GoogleAuthService, public ngZone: NgZone) {
    if (this.isUserSignedIn()){
      this.setUser(this.getSessionUser());
    }
  }
  setUser(user: GoogleUser): void{
    this.profile = user['Fs'];
    this.tokenUser = user['uc'].access_token;
    this.uid = this.profile['KR'];
  }
  getSessionUser(): GoogleUser {
    const user: string = sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY);
    if (!user){
      throw new Error('No token set, authentication required');
    }
    return JSON.parse(user);
  }
  isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY));
  }
  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(
        res => this.signInSuccessHandler(res),
        err => this.signInErrorHandler(err));
    });
  }

  public signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
        this.profile = undefined;
        this.tokenUser = undefined;
        this.uid = undefined;
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(LoginService.SESSION_STORAGE_KEY);
    });
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.setUser(res);
      sessionStorage.setItem(
        LoginService.SESSION_STORAGE_KEY, JSON.stringify(res)
      );
    });
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }
}
