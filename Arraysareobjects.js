
var fn = {
    getFiltered : function(fn) {
      return this.filter(fn);
    },
    getRejected : function(fn) {
      let fil = this.filter(fn);
      return this.filter(a => fil.indexOf(a) === -1);
    },
    getSplit : function(fn) { return {"pass": this.getFiltered(fn), "fail": this.getRejected(fn)}; },
    count : function() { return this.length; },
    double : function() { return this.concat(this); },
    multiply : function(n) { return this.map(a => a * n); },
    first : function() { return [this[0]]; },
    last : function() { return [this[this.length-1]]; },
    eq : function(i) { return [this[i]]; }
  }
  
  Object.assign(Array.prototype, fn);
  
  let magicArray = function() {
    return [...arguments];
  }