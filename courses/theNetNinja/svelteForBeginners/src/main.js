import App from './App.svelte';
import LoopsApp from './LoopsApp.svelte'

const app = new LoopsApp({
	target: document.body,
	props: {
		name: 'Brett'
	}
});

export default app;