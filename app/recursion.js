exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    if (!data || !data.files) {
      return []
    }
    let out = []
    for (let file of data.files) {
      if (typeof file === 'object') {
        if (data.dir === dirName) {
          out.push(...exports.recursionAnswers.listFiles(file, file.dir))
        } else {
          out.push(...exports.recursionAnswers.listFiles(file, dirName))
        }
      } else if (!dirName || data.dir === dirName) {
        out.push(file)
      }
    }
    return out
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
