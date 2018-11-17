import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: 'Login', url: 'login'},
    {linkName: 'Register', url: 'register'},
    {linkName: 'Search', url: 'search'},
    {linkName: 'Saved', url: 'saved'},
    {linkName: 'Account', url: 'account'}
    
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
