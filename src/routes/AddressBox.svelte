<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function mouseenter() {
     dispatch('mouseenter')
  }
  function focus() {
     dispatch('focus')
  }
  function mouseout() {
     dispatch('mouseout')
  }
  function blur() {
     dispatch('blur')
  }
</script>


<a 
  on:mouseenter={mouseenter} 
  on:focus={focus} 
  on:mouseout={mouseout} 
  on:blur={blur} 
  class="{$$restProps.class || ''}" 
  href="{$$restProps.href || ''}">
  {$$restProps.text || ''}
</a>


<style>
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
  
        @media (min-width: 640px) {
          margin: 0 10px;
      }
      }
  </style>
  
  
  