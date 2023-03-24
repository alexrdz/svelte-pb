import { currentUser, pb } from '$lib/pocketbase';

// store session data from cookies
pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model);
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});
