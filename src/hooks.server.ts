import { pb } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// before response
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	// check if token ist still valid
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_error) {
			pb.authStore.clear();
		}
	}

	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	// during response
	const response = await resolve(event);

	// after response
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));
	return response;
};
