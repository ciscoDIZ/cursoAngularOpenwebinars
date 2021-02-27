import { Component, OnInit } from '@angular/core';
import {WarningService} from '../../services/warning.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  constructor(public warningService: WarningService) { }

  ngOnInit(): void {
    this.warningService.showMessage();
  }
}
