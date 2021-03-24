const findIndex = (array, callback) => {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        index = i;
        return index;
      }
    }
    return index;
  };

  module.exports = {
    findIndex
  };