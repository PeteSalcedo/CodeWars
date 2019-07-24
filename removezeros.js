function removeZeros(array) {
    let totalNumsFounds = 0;
    let checked = 0;
  
    for (let i = 0; i < array.length; i++) {
      console.log(totalNumsFounds, array.length - i)
      console.log(array.length-i)
     if (array[i] === 0 || array[i] === '0') {
       //console.log('found at index', i, array[i], array)
       let zero = array[i];
       
       for (let j = i; j < array.length; j++) {
         array[j] = array[j+1];
       }
  
       array[array.length-1] = zero;
       
       i--;
       
       totalNumsFounds++;
  
       
       
       if (totalNumsFounds === array.length - i) {
         i = array.length;
       }
     }
     checked++;
     if (checked === array.length - 1) i = array.length;
    }
    return array;
  }
  