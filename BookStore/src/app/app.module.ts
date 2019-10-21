import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './Components/login/login.component';
import { ForgotPassComponent } from './Components/forgot-pass/forgot-pass.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoggedInComponent } from './Components/user-logged-in/user-logged-in.component';
import { ItemsContainerComponent } from './Components/items-container/items-container.component';
import { CartDataComponent } from './Components/cart-data/cart-data.component';
import { ProfileComponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    UserLoggedInComponent,
    ItemsContainerComponent,
    CartDataComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo : "login",
        pathMatch : "full"
      },
      {
        path : "login",
        component : LoginComponent
      },
      {
        path: "forgot-pass",
        component: ForgotPassComponent
      },
      {
        path: "loggedin",
        component: UserLoggedInComponent,
        children : [
          {
            path : "profile",
            component : ProfileComponent
          },
          {
            path: "shop",
            component: ItemsContainerComponent
          },
          {
            path: "cart",
            component: CartDataComponent
          }
        ]
      }
    ],{useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
