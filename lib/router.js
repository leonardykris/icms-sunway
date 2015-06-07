Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/programme', function () {
  this.render('programmeButton');
});

Router.route('/subject', function () {
  this.render('subject');
});