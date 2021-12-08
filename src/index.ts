import express from "express";
import router from "./router";
import helmet from "helmet";
import cors from "cors";

const PORT = process.env.PORT || 3005;
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(router);

(async function bootstrap() {
  app.listen(PORT, () => {
    console.log("⍦ Ready to serve on port " + PORT + " ☭");
  });
})();
