function frame(score){
    let valid = 0, arr = score.replace(/\(\d+\d*\,\)/, '').split(';');
    for (let i = 0; i < arr.length; i++) {
      let temp  = arr[i].split('-');
      if (parseInt(temp[0]) > parseInt(temp[1]))
        valid++;
     }
    return [ valid, arr.length-valid];
 }