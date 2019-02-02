import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListItemPage } from "./listItem.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListItemPage
      }
    ])
  ],
  bootstrap: [ListItemPage],
  declarations: [ListItemPage]
})
export class ListItemPageModule {
}
