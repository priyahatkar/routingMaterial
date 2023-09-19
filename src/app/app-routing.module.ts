import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '', component : DashBoardComponent
  },
  {
    path : 'home', component : DashBoardComponent
  },
  {
    path : 'products',  component : ProductsComponent
  }, 
  {
    path : 'users', component : UsersComponent
  },
  {
    path : 'pageNotFound', component : PageNotFoundComponent
  },
  {
    path : '**', 
    redirectTo : 'pageNotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
