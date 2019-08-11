exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(fn, arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function (str2) {
      return `${str}, ${str2}`
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(x => () => x * x)
  },

  partial: function(fn, str1, str2) {
    return (s) => fn(str1, str2, s)
  },

  useArguments: function() {
    return [...arguments].reduce((acc, el) => acc + el, 0)
  },

  callIt: function(fn) {
    const args = [...arguments].slice(1)
    return fn.apply(fn, args)
  },

  partialUsingArguments: function(fn) {
    const partialArgs = [...arguments].slice(1)
    return (...args) => fn.apply(fn, partialArgs.concat(args))
  },

  curryIt: function(fn) {
    const neededArgs = fn.length
    const args = []
    return function curried (a) {
      args.push(a)
      if (args.length === neededArgs) {
        return fn.apply(fn, args)
      }
      return curried
    }
  }
};
