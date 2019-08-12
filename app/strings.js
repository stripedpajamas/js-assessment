exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.replace(/(.)\1+/g, '$1'.repeat(amount))
  },

  wordWrap: function(str, cols) {
    const out = []
    const split = str.split(' ')
    let current = []
    let currentLength = 0
    for (let word of split) {
      if (word.length >= (cols - currentLength) && current.length) {
        out.push(current.join(' '))
        current = []
        currentLength = 0
      }
      current.push(word)
      currentLength += word.length
    }
    out.push(current.join(' '))
    return out.join('\n')
  },

  reverseString: function(str) {
    const out = []
    for (let i = str.length - 1; i >= 0; i--) {
      out.push(str[i])
    }
    return out.join('')
  }
};
