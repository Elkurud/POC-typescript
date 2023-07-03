import { connection } from "../database/database.connection";
import { CreateNote, Note } from "protocols";
 
export async function createNote(note: CreateNote) {



}

export async function getNotes() {

    const notes = await connection.query<Note>(`SELECT * FROM "notes"`);
    return notes.rows

}