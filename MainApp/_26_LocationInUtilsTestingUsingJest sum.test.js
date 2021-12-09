const sum = require('./sum');//desired function is imported here

/*In the test function , we first state the purpose of the test in a string
*/
test('adds 1 + 2 to equal 3', () => {//This string is displayed when the test is done. 
  expect(sum(1, 2)).toBe(3);//Here we define expectations of our test which is it will take two numbers 1 and 2 and return 3.
});