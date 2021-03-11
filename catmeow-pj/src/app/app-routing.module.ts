import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: '',
    redirectTo: 'add-edit',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cat-food',
    loadChildren: () => import('./cat-food/cat-food.module').then( m => m.CatFoodPageModule)
  },
  {
    path: 'cat-feed/:data',
    loadChildren: () => import('./cat-feed/cat-feed.module').then( m => m.CatFeedPageModule)
  },
  {
    path: 'view-more',
    loadChildren: () => import('./view-more/view-more.module').then( m => m.ViewMorePageModule)
  },
  
  {
    path: 'edit/:data',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// canActivate:[AuthGuard]