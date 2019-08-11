exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((acc, el) => acc + el, 0)
  },

  remove: function(arr, item) {
    return arr.filter(x => x != item)
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    return arr.reduce((total, el) => el === item ? total + 1 : total, 0)
  },

  duplicates: function(arr) {
    const seen = new Set()
    const dupes = new Set()
    for (let n of arr) {
      if (seen.has(n)) {
        dupes.add(n)
      } else {
        seen.add(n)
      }
    }
    return [...dupes]
  },

  square: function(arr) {
    return arr.map(x => x*x)
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((acc, el, idx) => el === target ? acc.concat(idx) : acc, [])
  }
};
