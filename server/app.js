Meteor.startup(function() {

	Players = new Mongo.Collection("players");

    if (Players.find().count() === 0) {
        var names = ['Ada Lovelace', 'Grace Hopper', 'Marie Curie', 'Carl Friedrich Gauss'];
        _.each(names, function(name) {
            Players.insert({
                name: name,
                score: Math.floor(Random.fraction() * 10) * 5
            });
        });
    } 
});