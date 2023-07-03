import { connection } from "../database/database.connection";
import { CreateNote, Note } from "protocols";
 
export async function createNote(note: CreateNote) {



}

export async function getNotes() {

    const notes = await connection.query<Note>(`SELECT * FROM "notes"`);
    return notes.rows

}

export async function getNoteById(id:string) {
    
    const note = await connection.query(`SELECT * FROM "notes" where id = $1`, [id]);
    return note.rows 

}

export async function editNote(id :string, content: string) {

    await connection.query(`UPDATE "notes" SET content = $2 where id = $1`, [id, content])
    return

}

export async function deleteNote(id: string) {

    await connection.query(`DELETE FROM "notes" where id = $1`, [id])
    return

}