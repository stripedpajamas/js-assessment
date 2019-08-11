exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    const out = []
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        out.push(`${key}: ${obj[key]}`)
      }
    }
    return out
  }
};
