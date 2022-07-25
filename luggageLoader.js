function luggageLoader(a) {
  const luggageInput = []
  var sum = 0;
  for (let i = 0; i < a.length; i++) {
    var max = 40;
    var container = [];
    if ( sum <= max) {
      sum += a[i]
    }
    container.push(a[i])
      
    // container.push(a[i])
    //  console.log(sum)
     
    console.log(container)
  }
  console.log(luggageInput)
}

luggageLoader([3, 27, 10])