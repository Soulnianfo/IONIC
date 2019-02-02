import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const defaultsRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: '../modules/main/main.page.module#MainPageModule'
  },
  {
    path: 'page1',
    loadChildren: '../modules/pages/page1/page1.page.module#Page1PageModule'
  },
  {
    path: 'login',
    loadChildren: '../modules/projet/login/login.page.module#LoginPageModule'
  }
  ,
  {
    path: 'listItem',
    loadChildren: '../modules/projet/listItem/listItem.page.module#ListItemPageModule'
  }

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
