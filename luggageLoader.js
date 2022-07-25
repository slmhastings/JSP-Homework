function luggageLoader(a) {
  const luggageInput = []
  var sum = 0;
  var container = [];
  for (let i = 0; i < a.length; i++) {
    var max = 40;
    if ( sum <= max) {
      sum += a[i]
      console.log(sum)
      container.push(a[i])
    }
    else {
      luggageInput.push(a[i])
    }
    
    
  }
  luggageInput.push(container)
  console.log(container)
  console.log(luggageInput)
}

luggageLoader([30, 5, 6])