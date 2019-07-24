let isPP = function(n) {
    let k = Math.log(n)/Math.LN2;
    if(Math.pow(n, 1/2) % 1 === 0) { return [Math.pow(n, 1/2), 2]; }
    for(let i = 2; i <= ~~k; i+=1){
      let x = Math.round(Math.pow(n, 1/i));
      if(Math.pow(x, i) === n) {
        return [x, i]    
      }
    }
    return null;
  }
  isPP(5)