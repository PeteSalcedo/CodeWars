let add = function(a,b){
    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = '', temp = 0;
    while (a.length || b.length || temp) {
      temp += (~~a.shift()) + (~~b.shift());
      let mod = temp % 2;
      result = mod + result;
      temp = temp > 1;
    }
    return (+result) ? result.replace(/^0+/, '') : '0';
  };