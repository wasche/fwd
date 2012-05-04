exports.path = '/';

exports.get = function(req, res){
  var dns = require('dns')
    , mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    , User = mongoose.model('User')
    ;

  dns.reverse(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    function(err, domains){
      Forward.getLatest(function(err, latest){
        if (err) { throw err; }
        Forward.getRecent(function(err, recent){
          if (err) { throw err; }
          Forward.getPopular(function(err, popular){
            if (err) { throw err; }
            if (domains && domains.length) {
              User.$where('this.hosts.indexOf("' + domains[0] + '") >= 0').exec(function(err, users){
                if (err) { throw err; }
                res.render('home', {
                  title: null
                , user: users && users.length && users[0]
                , host: domains && domains.length && domains[0]
                , latest: latest
                , recent: recent
                , popular: popular
                });
              });
            } else {
              res.render('home', {
                title: null
              , user: null
              , host: domains && domains.length && domains[0]
              , latest: latest
              , recent: recent
              , popular: popular
              });
            }
          });
        });
      });
  });
};
