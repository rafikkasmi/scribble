import { writable } from 'svelte/store';

export const user = writable({ id: null, nickname: null, skin: 0 });