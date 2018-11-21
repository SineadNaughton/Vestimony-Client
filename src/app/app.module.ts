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
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemInfoBlockComponent } from './item-info-block/item-info-block.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { VestimonialTileComponent } from './vestimonial-tile/vestimonial-tile.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ProfileDataService } from './services/vestimony-api/profile-data.service';
import { RegisterComponent } from './register/register.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountEditComponent } from './user-account-edit/user-account-edit.component';
import { NgInviewModule } from 'angular-inport';
import { ItemFilterComponent } from './item-filter/item-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { VestimonialAddComponent } from './vestimonial-add/vestimonial-add.component';
import { ItemAddVestimonialListComponent } from './item-add-vestimonial-list/item-add-vestimonial-list.component';
import { VestimonialAddReviewComponent } from './vestimonial-add-review/vestimonial-add-review.component';
import { VestimonialDataService } from './services/vestimony-api/vestimonial-data.service';
import { VestimonialLinkComponent } from './vestimonial-link/vestimonial-link.component';
import { VestimonialLinkConfirmComponent } from './vestimonial-link-confirm/vestimonial-link-confirm.component';
import { PostTileListComponent } from './post-tile-list/post-tile-list.component';
import { ImageCropperModule } from 'ngx-image-cropper';








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
    TruncatePipe,
    ItemTileComponent,
    ItemTileListComponent,
    SearchComponent,
    UserSavedLikedComponent,
    ItemDisplayComponent,
    ItemInfoBlockComponent,
    PostDisplayComponent,
    VestimonialTileComponent,
    ProfileDisplayComponent,
    RegisterComponent,
    UserAccountComponent,
    UserAccountEditComponent,
    ItemFilterComponent,
    PostCreationComponent,
    VestimonialAddComponent,
    ItemAddVestimonialListComponent,
    VestimonialAddReviewComponent,
    VestimonialLinkComponent,
    VestimonialLinkConfirmComponent,
    PostTileListComponent

   
    
   
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
    BrowserAnimationsModule, 
    ImageCropperModule 
  ],
  providers: [
    TruncatePipe,
    PostDataService,    
    AuthUserService,
    AuthTokenService,
    JwtHelperService,
    CurrentUserDataService,
    ItemDataService,
    ProfileDataService,
    VestimonialDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
