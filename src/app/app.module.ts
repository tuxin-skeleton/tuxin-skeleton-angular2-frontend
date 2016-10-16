import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {APP_BASE_HREF} from "@angular/common";
import { MaterialModule } from "@angular/material";
import { AUTH_PROVIDERS }      from "angular2-jwt";
import { RouterModule }  from "@angular/router";
import {AppConfigService} from "./app-config.service";


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: "",redirectTo:"welcome",pathMatch:"full"},
      { path: "welcome", component: WelcomeComponent },
      { path: "help",component: HelpComponent},
      { path: "**",redirectTo:"welcome"}
    ])
  ],
  providers: [AUTH_PROVIDERS,AppConfigService,
    {
      provide: APP_BASE_HREF,
      useFactory: (config: AppConfigService) => {
        return config.get('appBaseHref')
      },
      deps: [ AppConfigService ]
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
