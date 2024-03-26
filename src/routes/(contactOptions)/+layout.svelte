<script>
	import '../../app.pcss';
	import { onMount } from 'svelte';
	import { typewriter } from './typewriter';

	const messages = [
	"hello...",
	"how are you?",
	"welcome...",
	];

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<nav>
	<a href="/">home</a>
	<a href="/chat">chat</a>
	<a href="/message">message</a>
	<a href="/call">call</a>
	{#key i}
		<p in:typewriter={{ speed: 10 }}>
			{messages[i] || ''}
		</p>
	{/key}
</nav>
<!-- to show pages' content wherever but not main page -->
<slot />
