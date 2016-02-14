// respond with "hello world" when a GET request is made to the homepage

exports.root = function(req, res) {
  console.log('holo');
  res.render('home');

};

exports.resume = function(req, res) {
  res.render('resume');

};

exports.ethnography = function(req, res) {
  res.render('ethnography');
};


exports.studyspace = function(req, res) {
  res.render('studyspace');
};

exports.photoseries = function(req, res) {
  res.render('photoseries');
};


