exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    function Module () {
      this.greeting = str1
      this.name = str2
    }

    Module.prototype.sayIt = function () {
      return this.greeting + ', ' + this.name
    }

    return new Module()
  }
};
