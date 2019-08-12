exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.replace(/(.)\1+/g, '$1'.repeat(amount))
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    const out = []
    for (let i = str.length - 1; i >= 0; i--) {
      out.push(str[i])
    }
    return out.join('')
  }
};
