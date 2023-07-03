export type Note = {
    id: number;
    name: string;
    text: string;
}

export type CreateNote = Omit<Note, "id">;