const { findIndex } = require('./findIndex');

it('it takes in an array and callback then returns index of first true item', () => {
    const array = ['flash', 'ratty', 'shoes', 'cbd', 'money'];
    const callback = (item) => {
      if (item.startsWith('r')) return item;
    };
    const newArray = findIndex(array, callback);

    expect(newArray).toEqual(1);
  });