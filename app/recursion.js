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
    const out = []
    function collectPerms (used = [], current = []) {
      if (current.length === arr.length) {
        out.push(current)
        return out
      }
      arr.forEach((el, i) => {
        if (used[i]) return
        const nextUsed = used.slice()
        nextUsed[i] = true
        collectPerms(nextUsed, current.concat(el))
      })
      return out
    }
    return collectPerms()
  },

  fibonacci: function(n) {
    let a = 0
    let b = 1
    for (let i = n; i > 0; i--) {
      let tmp = a
      a = b
      b += tmp
    }
    return a
  },

  validParentheses: function(n) {
    const out = []
    function generateParens (current, open, close) {
      if (close === n) {
        out.push(current)
        return out
      }
      if (close < open) {
        generateParens(current + ')', open, close + 1)
      }
      if (open < n) {
        generateParens(current + '(', open + 1, close)
      }

      return out
    }
    return generateParens('', 0, 0)
  }
};
