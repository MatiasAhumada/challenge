import { config as dotenv } from "dotenv";
import { AUTH0_BASE_URL, AUTH0_CLIENT_ID, AUTH0_ISSUER_BASE_URL, AUTH0_SECRET } from "./envs";



dotenv({
  path: ".env",
});
export const configAuth0 = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_BASE_URL,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  authorizationParams: {
    scope: "openid profile",

  },
  
};
