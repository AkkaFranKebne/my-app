<script>

	import { enhance } from "$app/forms";
  let sending = false;
  let name = '';
  let enabled = false;

</script>
{#if name.length > 0}
<h1>Hello {name}!</h1>
{:else}
<h1>Hello!</h1>
{/if}

<p>you can write us a message:</p>

<form 
  method="POST" 
  action="?/send"
  use:enhance={() => {
    sending = true;

    return async ({update, result}) => {
        await update();
        sending = false;
        alert(result.type);
    }
}}
  > 
  <label>
    name
    <input
      name="name"
      autocomplete="off"
      bind:value={name} 
    />
  </label>
  <label>
      email
      <input
        name="email"
        autocomplete="off"
      />
  </label>
  <label>
    title
    <input
      name="title"
      autocomplete="off"
    />
  </label>
  <label>
    message
    <textarea name="messageText" rows="4" cols="50">write your message...</textarea>
  </label>
  <input type="checkbox" bind:checked={enabled} />
  <button type="submit" disabled={!enabled || sending}>send</button>
</form>