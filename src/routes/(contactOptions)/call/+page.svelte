<script>
	export let data;
</script>


  <div class="layout">
    <main>
        {#each data.summaries as { content, title }}
          <div class="layout-element">
            <h2>{title}</h2>
            {@html content}
          </div>
        {/each}
    </main>
  </div>
  
  <style>
    @media (min-width: 640px) {
      .layout {
        display: grid;
        gap: 2em;
        grid-template-columns: 1fr 16em;
      }
      .layout-element {
        border: 3px solid hsl(0, 0%, 40%);
        border-radius: 4px;
        padding: 20px;
        margin: 10px 0;
      }
    }
  </style>