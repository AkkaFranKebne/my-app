// just faking api for now

const db:  FormData[] = [];

export function sendChat(message: FormData) {
  db.push(message);
}