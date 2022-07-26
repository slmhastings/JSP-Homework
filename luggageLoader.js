function luggageLoader(a) {
  const luggageInput = []
  var sum = 0;
  var container = [];
  for (let i = 0; i < a.length; i++) {
    var max = 40;
    sum += a[i]
    if ( sum <= max) {
      // console.log(sum)
      container.push(a[i])
    }
    else if (sum > max){
      luggageInput.push([a[i]])
      
    }
    
    
  }
  luggageInput.push(container)
  // var lifo = luggageInput.reverse
  // console.log(container)
  console.log(luggageInput)
  
}

luggageLoader([30, 5, 6])