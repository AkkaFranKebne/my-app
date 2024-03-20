<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let clicked = false;
  let hovered = false;
  export let exclamation = '!';

  function mouseenter() {
     dispatch('mouseenter');
     hovered = true;
  }
  function focus() {
     dispatch('focus');
     hovered = true;
  }
  function mouseout() {
     dispatch('mouseout');
     hovered = false;
  }
  function blur() {
     dispatch('blur');
     hovered = false;
  }
  function click() {
     clicked = true;
  }
</script>


<a 
  on:mouseenter={mouseenter} 
  on:focus={focus} 
  on:mouseout={mouseout} 
  on:blur={blur} 
  on:click={click}
  class="{$$restProps.class || ''}" 
  class:clicked
  class:hovered
  href="{$$restProps.href || ''}">
  {$$restProps.text || ''}{exclamation}
</a>


<style>

    @keyframes wobble {
      0% { transform: translateX(0%); }
      15% { transform: translateX(-25%) rotate(-5deg); }
      30% { transform: translateX(20%) rotate(3deg); }
      45% { transform: translateX(-15%) rotate(-3deg); }
      60% { transform: translateX(10%) rotate(2deg); }
      75% { transform: translateX(-5%) rotate(-1deg); }
      100% { transform: translateX(0%); }
    }

    @keyframes bounce {
      70% { transform:translateY(0%); }
      80% { transform:translateY(-15%); }
      90% { transform:translateY(0%); }
      95% { transform:translateY(-7%); }
      97% { transform:translateY(0%); }
      99% { transform:translateY(-3%); }
      100% { transform:translateY(0); }
    }
    .element {
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 53%);
        border-radius: 12px;
        padding: 60px 40px;
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 0px;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  
        &:hover {
          cursor: pointer;
        }

        &.clicked {
          animation: wobble 2s ease infinite;
        }

        &.hovered {
          animation:  bounce 0.5s ease;
        }
  
        @media (min-width: 640px) {
          margin: 0 10px;
        }
      }
  </style>
  
  
  