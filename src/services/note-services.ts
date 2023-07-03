import { CreateNote, Note } from "protocols";
import * as noteRepository from "../repositories/note-repository";

export async function createNote(note: CreateNote) {
    return await noteRepository.createNote(note);
}

export async function getNotes() {
    return await noteRepository.getNotes();
}

export async function editNote(id: string, content: string) {

    const exists = await noteRepository.getNoteById(id)
    if (!exists) throw {
        type: "NotFoundError",
        message: "Note not found"
    }

    return await noteRepository.editNote(id, content) 

}

export async function deleteNote(id: string) {
    
    const exists = await noteRepository.getNoteById(id)
    if (!exists) throw {
        type: "NotFoundError",
        message: "Note not found"
    }

    return await noteRepository.deleteNote(id) 

}