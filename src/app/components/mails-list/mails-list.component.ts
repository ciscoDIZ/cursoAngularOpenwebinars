import {Component, OnInit} from '@angular/core';
import {Mail} from '../../interfaces/mail';
import {GmailService} from '../../services/gmail.service';
import {element} from 'protractor';
import {error} from '@angular/compiler/src/util';
import {NgGapiClientConfig} from 'ng-gapi';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.scss']
})
export class MailsListComponent implements OnInit {
  mails: any[];
  isAnswer: boolean;
  mailToAnswer: Mail;
  constructor(private gmailService: GmailService) {
    this.mails = [];
  }

  ngOnInit(): void {
    this.getRecibidos();
  }

  onAnswer(mail: Mail): void {
    mail.isAnswer = !mail.isAnswer;
  }

  quickAnswerAction(main: Mail){
    main.isAnswer = false;
  }

  getRecibidos() {
    this.gmailService.getRecibidos().subscribe( (responese: any) => {
        const messages = responese.messages;
        messages.forEach((e) => {
          this.getMessage(e.id);
        });
      });
  }

  getMessage(id: string){
    this.gmailService.getMessage(id).subscribe((response: any) => {
        const emisor = response.payload.headers.find(e => e.name === 'From');
        const subject = response.payload.headers.find(e => e.name === 'Subject');
        const message = {
          id: response.id,
          body: response.snippet,
          sender: emisor ? emisor.value : undefined,
          title: subject ? subject.value : undefined,
        };
        this.mails.push(message);
      });
  }
}
