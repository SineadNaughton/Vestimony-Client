import { isDevMode } from "@angular/core";

export class VestimonyApiConfig {
    public static readonly BASE_URL = isDevMode() ? 'http://localhost:8080' : 'https://vestimony-api.herokuapp.com';
}
