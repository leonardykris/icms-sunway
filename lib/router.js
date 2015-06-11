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
    data: function() {
      return Articles.find();
    }
  });

  // View Single PLO
  this.route('plo', {
    path: '/plo/:_id',
    data: function () {
      console.log(this.params._id);
      console.log(Articles.findOne({id: this.params._id}));
      return Articles.findOne({id: this.params._id});
    },
    template: 'plo'
  });

  // Accordion of PLO
  this.route('accordion');

});

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

