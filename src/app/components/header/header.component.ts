import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    document
      .querySelector('.user_menu')
      ?.parentElement?.parentElement?.classList.add('user_menu_container');
  }

  open_menu() {
    document
    .querySelector('.user_menu')
    ?.parentElement?.parentElement?.classList.add('user_menu_container');
  }
}


