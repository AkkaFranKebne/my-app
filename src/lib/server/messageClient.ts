// just faking api for now

const db:  FormData[] = [];

export function sendMessage(message: FormData) {
  db.push(message);
}