
import type { Actions } from '@sveltejs/kit';
import { sendMessage }  from '$lib/server/messageClient';

export const actions: Actions = {
	send: async ({  request }) => {
		const data = await request.formData();
    console.log(data);
		return sendMessage(data);
	},
};