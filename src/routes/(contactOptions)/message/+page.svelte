<script>
  import { email } from './stores';
	import { enhance } from "$app/forms";
  let sending = false;
  let name = '';
  let email_input = '';
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
        bind:value={email_input} 
        on:keyup={() => email.set( email_input)}
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
  {#if $email.length > 0}
  <label>
    <input type="checkbox" bind:checked={enabled} />
    {$email} is my email
  </label>
  {/if}
  <button type="submit" disabled={!enabled || sending}>send</button>
</form>