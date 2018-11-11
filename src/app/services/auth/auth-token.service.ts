import { Injectable } from '@angular/core';
import { AuthConstant } from './auth.constant';
import { AuthRequestBody } from './auth.request-body';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AuthTokenService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  async getAuthToken(username: string, password: string):Promise<string> {
    //create body of the request to be sent to the login endpoint
    const authRequestBody = new AuthRequestBody();
    authRequestBody.username=username;
    authRequestBody.password=password;

    //set the content type header to application/json so the endpoint can understand the body we send
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    //start a request to the authentication endpoint, with our body and headers
    const authRequest = this._httpClient.post(AuthConstant.URL_FOR_AUTHENTICATION, authRequestBody, { headers, observe: 'response' });

    //retriefve the re "await" and "toPromise()"
    const authResponse = await authRequest.toPromise();

    //return the authorization header from the response
    return authResponse.headers.get("authorization");
  }
}