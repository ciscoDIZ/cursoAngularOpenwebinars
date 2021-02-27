import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MailsListComponent} from './components/mails-list/mails-list.component';
import {MailsReceivedsComponent} from './views/mails-receiveds/mails-receiveds.component';
import {HomeComponent} from './views/home/home.component';
import {CorreoComponent} from './components/correo/correo.component';
import {NewMailComponent} from './components/new-mail/new-mail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mails', component: MailsReceivedsComponent},
  {path: 'send', component: NewMailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
