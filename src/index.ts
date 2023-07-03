import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import noteRouter from "./routers/note-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
})

app.use(noteRouter);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})