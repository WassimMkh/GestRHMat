import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {KeycloakService} from "../services/keycloak.service";

export const authGuard: CanActivateFn = (route, state) => {
  const  keycloakService = inject(KeycloakService);
  const router = inject(Router);
  if (keycloakService.Keycloak?.isTokenExpired()) {
    router.navigate(['authentificatio']);
    return false;
  }
  return true;
};
