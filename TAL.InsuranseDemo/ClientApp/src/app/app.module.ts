import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { CalculateComponent } from './feature/calculate/calculate.component';
import { CustomValidatorforAge } from './core/validators/custom-validatorfor-age';
import { CalculateServerComponent } from './feature/calculate-server/calculate-server.component';
import { GenericFunctions } from './core/utils/generic-functions';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CalculateComponent,
    CalculateServerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'calculate', component: CalculateComponent },
      { path: 'calculateServer', component: CalculateServerComponent },
      
    ])
  ],
  providers: [CustomValidatorforAge,
              GenericFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
