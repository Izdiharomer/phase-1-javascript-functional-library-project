function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (element) {
      result.push(callback(element));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIdx = 0;
  
    if (initialValue !== undefined) {
      accumulator = initialValue;
    } else {
      if (Array.isArray(collection)) {
        accumulator = collection[0];
        startIdx = 1;
      } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        accumulator = collection[keys[0]];
        startIdx = 1;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], collection);
      }
    }
  
    return accumulator;
  }
  
  
  
  
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (element) {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  