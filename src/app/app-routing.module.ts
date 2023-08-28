import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookslistComponent } from './views/books-list/books-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: 'lista-livros',
    component: BookslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
