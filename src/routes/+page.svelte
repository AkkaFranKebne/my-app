<script>
  let mainwrapper = true;
  let main = true;
  let content = true;
	let element = true;
</script>

<div class:mainwrapper>
  <main class:main>
    <div class:content>
      <a class:element href="/chat">chat with us</a>
      <a class:element href="/message">send a message</a>
      <a class:element href="/call">call us</a>
    </div>
  </main>
</div>

<style>

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
      flex: 1 1 auto;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  @media (min-width: 640px) {


    .main {
      flex-direction: row;
  } 
    .test1 {

    }

  }
</style>