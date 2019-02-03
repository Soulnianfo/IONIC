import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { articleDetailPage } from "./articleDetail.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: articleDetailPage
      }
    ])
  ],
  bootstrap: [articleDetailPage],
  declarations: [articleDetailPage]
})
export class articleDetailModule {
}
