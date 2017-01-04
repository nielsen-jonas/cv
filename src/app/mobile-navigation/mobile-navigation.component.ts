import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.css']
})
export class MobileNavigationComponent implements OnInit {
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
