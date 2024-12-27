import connect from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";

connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
