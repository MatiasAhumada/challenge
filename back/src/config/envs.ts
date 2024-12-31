import "dotenv/config";


const getEnvVariable = (key: string, required = true): string => {
    const value = process.env[key];
    if (required && !value) {
      throw new Error(`Environment variable ${key} is required but not defined`);
    }
    return value as string;
  };

export const PORT = process.env.PORT;
export const DB_URL = process.env.URL;
export const AUTH0_SECRET = process.env.AUTH0_SECRET;
export const AUTH0_BASE_URL = process.env.AUTH0_BASE_URL;
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
export const AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
