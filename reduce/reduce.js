const reduce = (array, callback, initialValue) => {
    let accumulated = 0;
    if (initialValue) {
      accumulated = initialValue;
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i]) accumulated = callback(accumulated, array[i]);
    }
    return accumulated;
  };

  module.exports = reduce;