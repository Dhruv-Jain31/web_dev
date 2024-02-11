function dhruvAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      setTimeout(function(){
        resolve("hi there!")
      },1000)

    });
    return p;
  }
  // await must be wrapped in a async function only. else
  // it will throw an error.
  async function main() {
    // no callbacks, no.then syntax
    const value = await dhruvAsyncFunction();
    console.log(value);
  }

  main();
  console.log("after main")