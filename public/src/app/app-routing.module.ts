import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { QuotesComponent } from './quotes/quotes.component';
import { VotesComponent } from './votes/votes.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'quotes/:id', component: QuotesComponent },
  { path: 'votes/:id', component: VotesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/authors' },
  { path: '**', component: AuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
