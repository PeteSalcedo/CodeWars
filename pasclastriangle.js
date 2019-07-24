function pascalsTriangle(n) {  let arr = [], idx = 0; 
    
    for ( let i = 0; i < n; i++ ) { 
      idx = arr.length - i; 
      for ( let j = 0; j < i+1; j++ ) 
        (j === 0 || j === i) ? arr.push(1) :  
        arr.push( arr[ idx+j ] + arr[ idx+j-1 ] ); 
    } 
     
    return arr; 
  } 