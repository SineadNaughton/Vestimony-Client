import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//mine
import { PostDataService } from './services/vestimony-api/post-data.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PostTileComponent } from './post-tile/post-tile.component';
import { PostFollowingListComponent } from './post-following-list/post-following-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';

//his
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthUserService } from './services/auth/auth-user.service';
import { AuthTokenService } from './services/auth/auth-token.service';
import { CurrentUserDataService } from './services/vestimony-api/current-user-data.service';
import { ItemDataService } from './services/vestimony-api/item-data.service';

import { SearchComponent } from './search/search.component';
import { ItemTileComponent } from './item-tile/item-tile.component';
import { ItemTileListComponent } from './item-tile-list/item-tile-list.component';
import { UserSavedLikedComponent } from './user-saved-liked/user-saved-liked.component';
import { UserLikedPostListComponent } from './user-liked-post-list/user-liked-post-list.component';
import { UserSavedItemListComponent } from './user-saved-item-list/user-saved-item-list.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemInfoBlockComponent } from './item-info-block/item-info-block.component';
import { PostForItemListComponent } from './post-for-item-list/post-for-item-list.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { VestimonialTileComponent } from './vestimonial-tile/vestimonial-tile.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ProfileDataService } from './services/vestimony-api/profile-data.service';
import { PostForProfileListComponent } from './post-for-profile-list/post-for-profile-list.component';
import { PostTrendingListComponent } from './post-trending-list/post-trending-list.component';
import { ItemTopRatedListComponent } from './item-top-rated-list/item-top-rated-list.component';
import { RegisterComponent } from './register/register.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountEditComponent } from './user-account-edit/user-account-edit.component';
import { NgInviewModule } from 'angular-inport';
import { ItemFilterComponent } from './item-filter/item-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { VestimonialAddComponent } from './vestimonial-add/vestimonial-add.component';
import { VestimonialAddItemListComponent } from './vestimonial-add-item-list/vestimonial-add-item-list.component';




//his
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavMenuComponent,
    PostTileComponent,
    PostFollowingListComponent,
    TruncatePipe,
    ItemTileComponent,
    ItemTileListComponent,
    SearchComponent,
    UserSavedLikedComponent,
    UserLikedPostListComponent,
    UserSavedItemListComponent,
    ItemDisplayComponent,
    ItemInfoBlockComponent,
    PostForItemListComponent,
    PostDisplayComponent,
    VestimonialTileComponent,
    ProfileDisplayComponent,
    PostForProfileListComponent,
    PostTrendingListComponent,
    ItemTopRatedListComponent,
    RegisterComponent,
    UserAccountComponent,
    UserAccountEditComponent,
    ItemFilterComponent,
    PostCreationComponent,
    VestimonialAddComponent,
    VestimonialAddItemListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //his
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080']
      }
    }),
    NgInviewModule,
    BrowserAnimationsModule    
  ],
  providers: [
    TruncatePipe,
    PostDataService,    
    AuthUserService,
    AuthTokenService,
    JwtHelperService,
    CurrentUserDataService,
    ItemDataService,
    ProfileDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
