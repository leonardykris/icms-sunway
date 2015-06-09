$(document).ready(function(){
    
});

Template.list.rendered = function() {

    var dataSource = new kendo.data.DataSource({
        sort: {
            field: 'score',
            dir: 'desc'
        },
        pageSize: 4
    });

    this.$('#list').kendoListView({
        dataSource: dataSource,
        template: '<tr><td>#:score#</td><td>#:name#</td><td><button class="remove btn btn-default" data-id="#:_id#">X</button></td></tr>'
    });

    this.$('#pager').kendoPager({
        dataSource: dataSource
    });

    this.autorun(function() {
        dataSource.data(Players.find().fetch());
    });
};

Template.list.events({
    'click .remove': function(event) {
    	Players.remove($(event.target).data('id'));
    }
});

Template.addForm.events({
    'submit .addForm': function(event) {

        Players.insert({
            name: event.target.name.value,
            score: Number(event.target.score.value)
        });

        // Clear form
		event.target.name.value = '';
		event.target.score.value = '';

        return false;

    }
});

var d = new Date();
var time = 'The time is now ' + d.getHours() + '.' + d.getMinutes();
var author = 'Leonardy';

if (d.getHours() < 4) {
    console.log('Good night, ' + author + ' :) ' + time);
} else if (d.getHours() < 12) {
    console.log('Good morning, ' + author + ' :) ' + time);
} else if (d.getHours() < 18) {
    console.log('Good afternoon, ' + author + ' :) ' + time);
} else if (d.getHours() < 24) {
    console.log('Good evening, ' + author + ' :) ' + time);
} else if (d.getHours() < 24) {
    console.log('Good night, ' + author + ' :) ' + time);
}

console.log('MQA has ' + MQA.find().count() + ' records currently');
console.log('Players has ' + Players.find().count() + ' records currently');

console.log('Do your best for this project. You can do it. :)');
// Test MQA collection
/*if (MQA.find().count() === 0) {
        console.log('MQA has ' + MQA.find().count() + ' records currently');
    }*/

