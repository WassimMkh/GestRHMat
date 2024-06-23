import {Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import {KeycloakService} from "../services/keycloak.service";

@Component({
  selector: 'app-manutention',
  templateUrl: './manutention.component.html',
  styleUrls: ['./manutention.component.css']
})
export class ManutentionComponent {
  activeLink: string = 'home';
  selectedTab: string = 'home';
  sidebarOpen = false;

  constructor(private router: Router,
              private keycloakService : KeycloakService) { }

  navigateTo(route: string) {
    this.activeLink = route;
    console.log(this.activeLink)
    this.router.navigate([`manutention/${route}`]);
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideSidebar = target.closest('.sidebar');
    const clickedToggleButton = target.closest('.nav-logo');

    if (!clickedInsideSidebar && !clickedToggleButton) {
      this.closeSidebar();
    }
  }

  onLogout() {
    this.keycloakService.logout();
  }
}
