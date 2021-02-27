import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarningService {
  $visible: boolean;
  $message: string;

  constructor() {
    this.$visible = false;
    this.$message = 'tu zi que ereh juapo emcanto';
  }

  showMessage(message?: string): void{
    this.$visible = true;
    this.$message = (message) ? message : this.$message;
    this.waitToHide();
  }

  hideMessage(): void{
    this.$visible = false;
    this.$message = '';
  }

  waitToHide(): void{
    setTimeout(() => this.hideMessage(), 2000);
  }

  get visible(): boolean{
    return  this.$visible;
  }
  get message(): string{
    return this.$message;
  }
}
