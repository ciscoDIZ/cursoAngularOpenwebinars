import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './components/correo/correo.component';
import { MailsListComponent } from './components/mails-list/mails-list.component';
import {FormsModule} from '@angular/forms';
import { NewMailComponent } from './components/new-mail/new-mail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { WarningComponent } from './components/warning/warning.component';
import { MailsReceivedsComponent } from './views/mails-receiveds/mails-receiveds.component';
import { LoginComponent } from './components/login/login.component';
import {GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleAuthService, GoogleApiService} from 'ng-gapi';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './views/home/home.component';

const gapiClientConfig: NgGapiClientConfig = {
    client_id: '922826736556-gh5t4jh5hgj05825phccn13kvrdr8rit.apps.googleusercontent.com',
    discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
    ux_mode: 'popup',
    redirect_uri: 'https://localhost:4200/loged',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/gmail.labels',
      'https://www.googleapis.com/auth/gmail.send',
      'https://www.googleapis.com/auth/gmail.readonly'
    ].join(' ')
  };

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    MailsListComponent,
    NewMailComponent,
    TopBarComponent,
    WarningComponent,
    MailsReceivedsComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
