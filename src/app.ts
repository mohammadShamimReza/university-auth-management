import express, { Application, Request, Response, urlencoded } from "express";
import cors from 'cors'
const app: Application = express();


app.use(cors())

app.use(express.json());
app.use( express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Working request response successfully");
});

export default app
