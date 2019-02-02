import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginPage } from "./login.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  bootstrap: [LoginPage],
  declarations: [LoginPage]
})
export class LoginPageModule {
}
