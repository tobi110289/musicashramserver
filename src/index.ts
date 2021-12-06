console.log('TRYING TO START THE NODE SERVER');
import express from "express";
import router from "./router";
import helmet from "helmet";
const PORT = process.env.PORT || 3005;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("connected");
});
