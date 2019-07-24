function queueTime(customers, n) {
    let wait_time = 0;
    let load = (customers.length < n) ? customers.length : n   
    let checkers = customers.slice(0,load);
    customers = customers.slice(load,customers.length)  
    
    while(checkers.length > 0){
      let least = Math.min.apply(null,checkers);
      checkers = checkers.map((customer) => customer-least)
      wait_time += least
      checkers = checkers.filter((customer) => customer != 0)
    }
 }
 queueTime([2,2,3,3,4,4], 2)