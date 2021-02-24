import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {
  mail: any;
  constructor() {
    this.mail = {
      title: 'Lorem ipsum.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
      sender: 'aaaa@aaa.aa',
      recipient: 'bbbb@bbb.bb'
    };
  }

  ngOnInit(): void {
    console.log(typeof this.mail);
  }

}
