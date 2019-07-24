let tenants=[
    {
    fname: 'pedro',
    lname: 'salcedo',
    age:20,
    sex:'Male',
    race:'Mexican'
  },
  {
    fname: 'Alejandro',
    lname: 'Alvarado',
    age:25,
    sex:'Male',
    race:'White Mexican'
  },
   {
    fname: 'Pancho',
    lname: 'Rojas',
    age:29,
    sex:'Male',
    race:'Poblano Mexican'
  },
];
  
  var result = tenants.filter((val) => val.age > 20
  )
  var resultOfMap = tenants.map((val) => val.age + 2
  )
console.log(result)

console.log(resultOfMap)