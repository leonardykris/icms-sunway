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

Router.route('/view_subjects', function () {
  this.render('view_subjects');
});

Router.route('/view_programmes', function () {
  this.render('view_programmes');
});