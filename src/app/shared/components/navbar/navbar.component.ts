import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sideNav') sideNav : any;
  constructor() { }

  ngOnInit(): void {
  }
  // onSideNav(){
  //   this.sideNav.open()
  // }
}
