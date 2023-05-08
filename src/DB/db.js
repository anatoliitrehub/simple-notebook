import Dexie from "dexie";

export const db = new Dexie("notesDB", { addons: [] });
db.version(1).stores({
  notes: "++id, date, title, text",
});
