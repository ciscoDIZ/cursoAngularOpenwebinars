import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Mail} from '../../interfaces/mail';
import {WarningService} from '../../services/warning.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.scss']
})

export class NewMailComponent implements OnInit {
  formGroup: FormGroup;
  submitted: boolean;
  @Input()
  mail: Mail;
  @Output()
  action: EventEmitter<Mail>;
  constructor(private formBuilder: FormBuilder, private warningService: WarningService) {
    this.action = new EventEmitter<Mail>();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(10)]],
      recipient: ['', Validators.required]
    });
    if (this.mail !== undefined) {
      this.formGroup.patchValue({
        title: 'Re: ' + this.mail.title,
        body: this.mail.body,
        sender: this.mail.sender,
        recipient: this.mail.recipient
      });
    }

  }

  get form() {
    if (this.formGroup) {
      return this.formGroup.controls;
    } else {
      return null;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.formGroup?.invalid) {
      const mail = this.formGroup?.value;
      mail.read = true;
      mail.sender = 'toteskuu@gmail.com';
      console.log('correo enviado');
      this.onReset();
      this.warningService.showMessage('Correo enviado');
    }
  }

  onReset(): void {
    this.submitted = false;
    this.formGroup.reset();
    this.action.emit();
  }

  cancel(): void{
    this.onReset();
    this.warningService.showMessage('Envio cancelado');
  }
}
