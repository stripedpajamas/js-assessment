exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return num >> (bit - 1) & 1
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    let s = num.toString(2)
    while (s.length < 8) s = '0' + s
    return s
  },

  multiply: function(a, b) {
    return a * b
  }
};
