import { isDevMode } from "@angular/core";

export class AuthConstant {
    public static readonly TOKEN_NAME = 'access_token';

    public static readonly URL_FOR_AUTHENTICATION = isDevMode() ? 'http://localhost:8080/login' : 'https://vestimony-api.herokuapp.com/login';
}