function StatusBar(){
  const test = function(){return 3}

  handler.bind(test)

  handler()
}

function handler(){
    console.log(this)
}
// handler()