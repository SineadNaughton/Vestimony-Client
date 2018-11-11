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
    })    
  ],
  providers: [
    TruncatePipe,
    PostDataService,    
    AuthUserService,
    AuthTokenService,
    JwtHelperService,
    CurrentUserDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
