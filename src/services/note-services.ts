import { CreateNote, Note } from "protocols";
import * as noteRepository from "../repositories/note-repository";

export async function createNote(note: CreateNote) {
    return await noteRepository.createNote(note);
}

export async function getNotes() {
    return await noteRepository.getNotes();
}