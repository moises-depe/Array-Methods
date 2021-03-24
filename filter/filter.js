const arrayFilter = (array, callback) => {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
      if (callback(array[index])) {
        newArray = [...newArray, array[index]];
      }

    }
    return newArray;
  };
  
  module.exports = arrayFilter;