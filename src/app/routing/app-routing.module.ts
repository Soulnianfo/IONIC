import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const defaultsRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: '../modules/projet/login/login.page.module#LoginPageModule'
  }
  ,
  {
    path: 'listItem',
    loadChildren: '../modules/projet/listItem/listItem.page.module#ListItemPageModule'
  },
  {
    path: 'articleDetail',
    loadChildren: '../modules/projet/articleDetail/articleDetail.page.module#articleDetailModule'
  },


];

const concatRoutes: Routes = [...defaultsRoutes] as Routes;

@NgModule({
  imports: [
    RouterModule.forRoot(concatRoutes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
