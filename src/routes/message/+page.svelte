<script>

	import { enhance } from "$app/forms";
  let sending = false;

</script>


<p>you can write us a message</p>
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
  <button type="submit" disabled={sending}>send</button>
</form>