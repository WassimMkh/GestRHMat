import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  activeLink: string = 'home';
  selectedTab: string = 'home';

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.activeLink = route;
    console.log(this.activeLink)

  }
}

