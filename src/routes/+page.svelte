<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import AddressBox from './AddressBox.svelte';

  let mainwrapper = true;
  let main = true;
  let content = true;
  let stopped = false;

  const stopAnimation = () => {
    stopped = true;
  }

  const startAnimation = () => {
    stopped = false;
  }

const routes = [
  {
    href: "/chat",
    text: "chat with us"
  },
  {
    href: "/message",
    text: "send a message"
  },
  {
    href: "/call",
    text: "call us"
  }
]

onMount(() => {
		console.log('mount')
	});

</script>

<div class:mainwrapper class:stopped>
  <main class:main>
    <div class:content transition:fade={{ delay: 250, duration: 300 }}>
      {#each routes as route (route.href)}
        <AddressBox 
          class="element"
          on:mouseenter={stopAnimation} 
          on:focus={stopAnimation} 
          on:mouseout={startAnimation} 
          on:blur={startAnimation} 
          href={route.href}
          text={route.text}
          />
      {/each}
    </div>
  </main>
</div>

<style>

@-webkit-keyframes backgroundAnimation {
    0%{background-position:0% 22%}
    50%{background-position:100% 79%}
    100%{background-position:0% 22%}
}
@-moz-keyframes backgroundAnimation {
    0%{background-position:0% 22%}
    50%{background-position:100% 79%}
    100%{background-position:0% 22%}
}
@keyframes backgroundAnimation {
    0%{background-position:0% 22%}
    50%{background-position:100% 79%}
    100%{background-position:0% 22%}
}

  .mainwrapper {
    display: flex; 
    height: 100%; 
    flex-direction: row; 
    align-items: center; 
    justify-content: center;
    background: #f7f0ac;
    background: linear-gradient(
      45deg,
      #f7f0ac,#acf7f0,#f0acf7
    );
    background-size: 500% 100%;
    animation: backgroundAnimation 10s linear infinite;
    animation-delay:  3s;
    animation-direction: alternate;
    animation-play-state:running;

    &.stopped {
      animation-play-state:paused;
    }
    
  }

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    width: 200px;

    @media (min-width: 640px) {
    flex-direction: row;
    width: 100vw;
    max-width: 900px;
    }
  
  }
</style>


