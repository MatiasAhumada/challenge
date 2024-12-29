import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Challenge API",
      version: "1.0.0",
      description: "API documentation",
      contact: {
        name: "Matias Ahumada",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/**.Routes.ts"],
};
const config = swaggerJsdoc(options);
export default config;
