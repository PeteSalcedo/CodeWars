let isNarcissistic = n => (String(n)).split('').map(a => { return Math.pow(a,('' + n).length) }).reduce( (a, b) => { return a + b}) === n;
