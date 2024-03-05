<script lang="ts">
	let number: Number;

	const answer = async ()=> {
		const response = await fetch('/chat');
		number = await response.json();
	}

	const ask = async (e: KeyboardEvent)=> {
    if (e.key !== 'Enter') return;

        const input = e.currentTarget as HTMLInputElement;
        const description = input && input.value;

        const response = await fetch('/chat', {
          method: 'POST',
          body: JSON.stringify({ description }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (input.value !== '') {
          input.value = '';
        }
        console.log(response)
	}
</script>

<label>
  Ask your question:
  <input
    type="text"
    autocomplete="off"
    on:keydown={ask}
  />
</label>

<button on:click={answer}>Hej, answer me!</button>

{#if number !== undefined}
	<p>My answer is: {number}</p>
{/if}
