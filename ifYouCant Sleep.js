var countSheep = function (num) {
    var murmur = '';
    for (var i = 0; i < num; i++) {
      murmur += (i+1) + ' sheep...';
    }
    return murmur;
  }