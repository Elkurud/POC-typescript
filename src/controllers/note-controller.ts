import { Request, Response } from "express";
import * as noteService from "../services/note-services";
import { CreateNote, Note } from "protocols";
import httpStatus from "http-status";

export async function createNote(req: Request, res: Response) {

    const note = req.body as CreateNote
    noteService.createNote(note);

    res.sendStatus(httpStatus.CREATED);

}

export async function getNotes(req: Request, res: Response) {

    const notes = await noteService.getNotes();
    res.status(httpStatus.OK).send(notes)

}

export async function editNote(req: Request, res: Response) {

    const id: string = req.params.id
    const content = req.body.content as string

    await noteService.editNote(id, content);
    res.sendStatus(httpStatus.OK)

}

export async function deleteNote(req: Request, res: Response) {

    const id: string = req.params.id
    await noteService.deleteNote(id)
    res.sendStatus(httpStatus.OK)
    
}