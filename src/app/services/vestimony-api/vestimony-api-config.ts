export class VestimonyApiConfig {
    public static BASE_URL = (isDevMode) => isDevMode ? 'http://localhost:8080' : 'https://vestimony-api.herokuapp.com';

    public static AccessToken = "";
}
