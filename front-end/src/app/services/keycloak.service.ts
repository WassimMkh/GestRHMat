import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";
import {UserRequestModel} from "../models/user-request.model";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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

  constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) { }

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
        this.router.navigate(['admin']);
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

  addUser(user: any) {
    const url = 'http://localhost:8080/auth/admin/realms/marsa_maroc_realm/users';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Keycloak.token}`
    });
    return this.http.post(url, user, { headers });
  }
}
