exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str)
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z])\1+/.test(str)
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str)
  },

  captureThreeNumbers: function(str) {
    return (/(\d{3})/.exec(str) || [])[1] || false
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str)
  },

  isUSD: function(str) {
    return /^\$(?:(?:(?:\d{1,3},)?(?:\d{3},)*\d{3})|\d{1,3})(?:\.\d{2})?$/.test(str)
  }
};
