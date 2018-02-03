var string1 = "";
var object1 = {id: 1, name1: ' georgi ', name2: 'ivanov'};

for (var person in object1) {
  console.log(object1[person]);
  // string1 = string1 + object1[person];
}

// console.log(string1);