exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let stop = false
    console.log(start++)
    setTimeout(function logNumber () {
      console.log(start++)
      if (start <= end && !stop) {
        setTimeout(logNumber, 100)
      }
    }, 100)
    return {
      cancel() {
        stop = true
      }
    }
  }
};
