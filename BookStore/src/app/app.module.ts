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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    UserLoggedInComponent,
    ItemsContainerComponent,
    CartDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LoginComponent,
        outlet: "menuOutlet",
        pathMatch: 'full'
      },
      {
        path: "forgot-pass",
        component: ForgotPassComponent,
        outlet: "menuOutlet",
        pathMatch: 'full'
      },
      {
        path: "profile",
        component: UserLoggedInComponent,
        outlet: "menuOutlet",
        pathMatch: 'full'
      },
      {
        path: "items-container",
        component: ItemsContainerComponent,
        outlet: "contentOutlet",
        pathMatch: 'full'
      },
      {
        path: "cart-data",
        component: CartDataComponent,
        outlet: "contentOutlet",
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
