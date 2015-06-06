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