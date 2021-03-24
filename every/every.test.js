const every = require("./every");

it('it takes in an array and callback then returns true if all are true', () => {
    const array = ['flash', 'ratty', 'shoes', 'cbd', 'money'];
    const callback = (item) => item.startsWith('f');
    const newArray = every(array, callback);

    expect(newArray).toBeFalsy();
  });