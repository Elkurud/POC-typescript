import express, { Request, Response, json } from "express";
import "express-async-errors"
import httpStatus from "http-status";
import noteRouter from "./routers/note-router";
import errorHandler from "./errors/errorMiddleware";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
})

app.use(noteRouter);
app.use(errorHandler);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})