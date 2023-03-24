import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase, { Record, Admin } from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export const currentUser = writable<Record | Admin | null>(pb.authStore.model);
