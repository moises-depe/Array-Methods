const reduce = require('./reduce');

it('takes array and callback and returns accumulator', () => {
    const array = [1, 2, 3, 4];
    const callback = (accumulator, item) => {
      return accumulator + item;
    };
    const newArray = reduce(array, callback, 4);

    expect(newArray).toEqual(14);
  });