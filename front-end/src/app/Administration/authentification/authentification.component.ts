import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../services/keycloak.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit {

  constructor(private keyCloakService : KeycloakService) {
  }
  async ngOnInit() : Promise<void> {
    await this.keyCloakService.init();
    await this.keyCloakService.login();
  }

}
