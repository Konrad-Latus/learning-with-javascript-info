let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);

  function groupById(arr) {
    return arr.reduce((object, values) => {
        ovj[values.id] = value;
        return object;
    }, {})
  }