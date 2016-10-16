import { Injectable } from '@angular/core';
import {tokenNotExpired} from "angular2-jwt";
import {AppConfigService} from "./app-config.service";

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  appConfigService:AppConfigService;
  lock:any;
  // Configure Auth0
  constructor(appConfigService:AppConfigService) {
    this.lock = new Auth0Lock(appConfigService.get('auth0ApiKey'), appConfigService.get('auth0Domain'), {});
    // Add callback for lock `authenticated` event
    this.appConfigService=appConfigService;
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem("id_token", authResult.idToken);
    });
  }

  public login() {
    this.lock.show({
      callbackURL: this.appConfigService.get('auth0CallbackUrl')
    });
  };

  public authenticated() {
    // Check if there"s an unexpired JWT
    // It searches for an item in localStorage with key == "id_token"
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem("id_token");
  };

}
