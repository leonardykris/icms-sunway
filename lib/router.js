Router.map(function() {

  // Home
  this.route('home', {
    path: '/', // Custom routing to /
  });

  // Add Programme
  this.route('add_programme', {
    path: 'programme/add',
  });

  // View Programme
  this.route('view_programme', {
    path: 'programme/view',
  });
  
  // Add Subject 
  this.route('add_subject', {
    path: 'subject/add',
    template: 'add_subject'
  });

  // View Subject 
  this.route('view_subject', {
    path: 'subject/view',
  });

  // View PLOs
  this.route('plos', {
    path: 'plos/:_courseID',
    /*waitOn: function() {
        return Meteor.subscribe('programmes');
    },*/
    data: function() {
      // return Articles.find();
      var record = Programmes.findOne({ id: this.params._courseID});
      var templateData = { dataset: record.learning_outcomes }; // Must implement subscription for the waitOn to wait till database is ready

      return templateData;
    }
  });

  // View Single PLO
  this.route('plo', {
    path: '/plo/:_courseID/:_id',
    /*waitOn: function() {
        return Meteor.subscribe('programmes');
    },*/
    data: function () {
      console.log(this.params._id);
      // console.log(Articles.findOne({id: this.params._id}));
      var record = Programmes.findOne({ id: this.params._courseID});
      var templateData = { dataset: record.learning_outcomes[this.params._id - 1]};

      console.log(templateData);

      return templateData;
    },
    template: 'plo'
  });

  // Accordion of PLO
  this.route('accordion');

});

// Router.onBeforeAction('loading');

// Data context as an object
Router.route('posts', {
  path: '/posts',
  data: {
    posts: [
      {
        title: 'Did you know that...',
        text: 'If you yelled for 8 years, 7 months and 6 days, you would have produced enough sound energy to heat up one cup of coffee.'
      },
      {
        title: 'Hello World',
        text: 'Hi, i am new here!'
      }
    ]
  }
});

// Data context as a function
Router.route('postDetail', {
  path: '/posts/:_id',
  data: function (){
    _id  = this.params._id;
    templateData = {
      _id: _id,
      title: 'Did you know that...',
      text: 'If you yelled for 8 years, 7 months and 6 days, you would have produced enough sound energy to heat up one cup of coffee.'
    };
    return templateData;
  }
});

// Data context from a collection
Router.route('authors', {
  data:  { 
  	authors: Authors.find() 
  }
});

Router.route('authorDetail', {
  path: '/authors/:_id',
  notFoundTemplate: 'authorNotFound',
  data: function() {
    return Authors.findOne({_id: this.params._id});
  }
});

