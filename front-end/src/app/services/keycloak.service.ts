import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";
import {UserRequestModel} from "../models/user-request.model";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _Keycloak: Keycloak | undefined;
  private profile: UserRequestModel | undefined;

  get Keycloak() {
    if (!this._Keycloak) {
      this._Keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'marsa_maroc_realm',
        clientId: 'AngMarsaMaroc_APP'
      });
    }
    return this._Keycloak;
  }

  get getprofile(): UserRequestModel {
    return this.profile!;
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  async init() {
    console.log("Authentication ......");
    const authenticated = await this.Keycloak?.init({
      onLoad: 'login-required'
    });
    if (authenticated) {
      this.profile = (await this._Keycloak?.loadUserInfo()) as UserRequestModel;
      this.profile.token = this._Keycloak?.tokenParsed;
      this.profile.roles = this.profile.token.realm_access.roles;
      console.log(this.profile.token);
      console.log(this.profile.roles);
      if (this.profile.roles.includes("admin")) {
        this.router.navigate(['authentification']);
      }
      if (this.profile.roles.includes("rh")) {
        this.router.navigate(['manutention']);
      }
    }
  }

  login() {
    return this._Keycloak?.login();
  }

  logout() {
    return this._Keycloak?.logout({
      redirectUri: 'http://localhost:4200'
    });
  }
}
