<script>
  let mainwrapper = true;
  let main = true;
  let content = true;
	let element = true;
  let stopped = false;

  const stopAnimation = () => {
    stopped = true;
  }

  const startAnimation = () => {
    stopped = false;
  }

</script>

<div class:mainwrapper class:stopped>
  <main class:main>
    <div class:content>
      <a class:element on:mouseenter={stopAnimation} on:focus={stopAnimation} on:mouseout={startAnimation} on:blur={startAnimation} href="/chat">chat with us</a>
      <a class:element on:mouseenter={stopAnimation} on:focus={stopAnimation} on:mouseout={startAnimation} on:blur={startAnimation} href="/message">send a message</a>
      <a class:element on:mouseenter={stopAnimation} on:focus={stopAnimation} on:mouseout={startAnimation} on:blur={startAnimation} href="/call">call us</a>
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

      @media (min-width: 640px) {
        margin: 0 10px;
    }
    }
</style>


