
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.render('index', { title: 'Express' });
};