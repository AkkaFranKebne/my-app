<script>
	export let data;
</script>

<div>
	{#each data.summaries as { content, title }}
		<div>
      <h2>{title}</h2>
      {@html content}
    </div>
	{/each}
  </div>