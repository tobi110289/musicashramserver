import express from "express";
import router from "./router";
import helmet from "helmet";

const PORT = process.env.PORT || 3005;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(router);

(async function bootstrap() {
  app.listen(PORT, () => {
    console.log("⍦ Ready to serve on port " + PORT + " ☭");
  });
})();
