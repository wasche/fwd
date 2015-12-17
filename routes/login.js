exports.path = '/_login';
exports.carriesAuth = true;

exports.get = function(req, res){
  res.render('login', {
    page: 'login'
  , redirectTo: req.query.redirectTo
  });
};

exports.post = function(req, res){
  res.redirect(req.body.redirectTo || '/');
};
