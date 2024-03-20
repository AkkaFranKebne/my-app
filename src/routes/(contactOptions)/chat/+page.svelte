<script lang="ts">
  let prompt = '';
  let data = {};

  const submitForm = ()  => {
        fetch('http://localhost:5001/', {
            method: 'POST',
            body: JSON.stringify({prompt}),
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' ,  
          },
        })
        .then(res => res.json())
        .then(jsonRes => {
            data = jsonRes;
            console.log(data);
        });
      };

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
        answer();
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


{#if number !== undefined}
	<p>My answer is: {number}</p>
{:else}
  <p>idk</p>
{/if}


<form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={prompt} placeholder="Try Chat AI here and why ohh why you get the CROS error"/>
    <button type="submit">Submit</button>
  </form>