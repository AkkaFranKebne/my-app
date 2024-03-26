<script>
	export let data;
  import { spring } from 'svelte/motion';

  let coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.56,
    damping: 0.1
  });

  let size = spring(10);
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
  <svg
      on:mousemove={(e) => {
        coords.set({ x: e.clientX, y: e.clientY });
      }}
      on:mousedown={() => size.set(30)}
      on:mouseup={() => size.set(10)}
      role="presentation"
    >
      <circle
        cx={$coords.x}
        cy={$coords.y}
        r={$size}
      />
  </svg>
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
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
	}

    circle {
      fill: #f0acf7;
    }

  </style>