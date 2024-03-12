import { json } from '@sveltejs/kit';
import * as client from '$lib/server/chatClient';
import { openai }  from '$lib/server/openAi';
const aiData = async () => { const response = await openai.chat.completions.create({
	messages: [{ role: "user", content: "Say this is a test" }],
	model: "gpt-3.5-turbo",
	});
	console.log(response); 
}; 

export function GET() {
	aiData()
	const number = Math.floor(Math.random() * 6) + 1;
	return json(number);

}

export async function POST({ request }) {
	const data = await request.json();
	await client.sendChat(data);
	return json({ status: 201 });
}

