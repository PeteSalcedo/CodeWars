let findNb = function(n) {
    let sum = 0, idx = 1;
    
    while(sum < n) {
      sum += Math.pow(idx, 3);
      idx += 1;
    }
    
    return (sum === n) ? idx-1 : -1;
  }