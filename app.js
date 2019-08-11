import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.static('assets'));
app.use(routes.home, globalRouter);


export default app;
