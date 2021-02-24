import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss']
})
export class ListaCorreoComponent implements OnInit {
  mails: any[];

  constructor() {
    this.mails = [
      {
        title: 'Lorem ipsum.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
        sender: 'aaaa@aaa.aa',
        recipient: 'bbbb@bbb.bb',
        read: false
      },
      {
        title: 'Lorem ipsum.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
        sender: 'aaaa@aaa.aa',
        recipient: 'bbbb@bbb.bb',
        read: true
      },
      {
        title: 'Lorem ipsum.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
        sender: 'aaaa@aaa.aa',
        recipient: 'bbbb@bbb.bb',
        read: true
      },
      {
        title: 'Lorem ipsum.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
        sender: 'aaaa@aaa.aa',
        recipient: 'bbbb@bbb.bb',
        read: false
      },
      {
        title: 'Lorem ipsum.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
        sender: 'aaaa@aaa.aa',
        recipient: 'bbbb@bbb.bb',
        read: true
      },
      {
        title: 'Lorem ipsum.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam at consectetur deserunt dolor dolorem eum fuga fugit ipsa laborum nam nulla, odio quibusdam quisquam sunt, tempore totam vero!',
        sender: 'aaaa@aaa.aa',
        recipient: 'bbbb@bbb.bb',
        read: false
      }
    ];
  }

  ngOnInit(): void {
  }

}
