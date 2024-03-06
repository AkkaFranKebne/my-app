<script>
	let test1 = true;
  let test2 = true;
</script>

<p>this is how you can contact us:</p>

  <main>
    <div class:test1>
      <a class:test2 href="/chat">chat with us</a>
      <a class:test2 href="/message">send a message</a>
      <a class:test2 href="/call">call us</a>
    </div>
  </main>

<style>
  @media (min-width: 640px) {
    .test1 {
      display: flex;
      flex-direction: column;
      flex: 0 1 auto;
    }
    .test2 {
      border: 3px solid hsl(0, 0%, 40%);
      border-radius: 4px;
      padding: 20px;
      margin: 10px 0;
    }
  }
</style>