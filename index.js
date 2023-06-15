 const divide = function() {
    return 2000 / 100;
 }
 const square = (num) =>{
    return num * num;
};

// Arrow function called 'add'
const add = (a, b) => {
  return a + b;
};

// Exporting the functions if needed in another module
module.exports = {
  divide,
  square,
  add
};
 
