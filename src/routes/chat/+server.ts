import { json } from '@sveltejs/kit';
import * as client from '$lib/server/chatClient';

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

	return json(number);
}

export async function POST({ request }) {
	const data = await request.json();
	await client.sendChat(data);
	return json({ status: 201 });
}

