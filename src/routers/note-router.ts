import { Router } from "express";

import * as noteController from "../controllers/note-controller"

const noteRouter = Router()

noteRouter.get("/notes", noteController.getNotes);
noteRouter.post("/notes", noteController.createNote);
noteRouter.put("/notes/:id")
noteRouter.delete("/notes/:id")

export default noteRouter