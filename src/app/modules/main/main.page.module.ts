import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainPage} from "./main.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPage
      }
    ])
  ],
  bootstrap: [MainPage],
  declarations: [MainPage]
})
export class MainPageModule {
}
