import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { UserSavedLikedComponent } from './user-saved-liked/user-saved-liked.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { RegisterComponent } from './register/register.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountEditComponent } from './user-account-edit/user-account-edit.component';

const routes: Route[] = [
  //this will redirect to home if there is nothing after the - not sure what pathmathch does
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'saved', component: UserSavedLikedComponent },
  { path: 'items/:id', component: ItemDisplayComponent },
  { path: 'posts/:id', component: PostDisplayComponent },
  { path: 'profiles/:id', component: ProfileDisplayComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: UserAccountComponent },
  { path: 'account/edit', component: UserAccountEditComponent },

  //wildcardpath
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
