exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value)
  },

  manipulateRemoteData: function(url) {
    /*
    {
      "people" : [
        { "name" : "Matt" },
        { "name" : "Rebecca" },
        { "name" : "Paul" },
        { "name" : "Alex" },
        { "name" : "Adam" }
      ]
    }
    */
    return fetch(url)
      .then(res => res.json())
      .then(json => json.people.map(a => a.name).sort())
  }
};
