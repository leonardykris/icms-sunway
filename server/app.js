Meteor.startup(function() {

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
    
    // On server startup, create some players if the database is empty.
    /*
            if (Players.find().count() === 0) {
        var names = ['Ada Lovelace', 'Grace Hopper', 'Marie Curie', 'Carl Friedrich Gauss'];
        _.each(names, function(name) {
            Players.insert({
                name: name,
                score: Math.floor(Random.fraction() * 10) * 5
            });
        });
    } 
    */
    MQA.remove({});
    console.log('MQA emptied');

    if (MQA.find().count() === 0) {
        var domain = [
                        'MQF1',
                        'MQF2',
                        'MQF3',
                        'MQF4',
                        'MQF5',
                        'MQF6',
                        'MQF7',
                        'MQF8',
                        ];
        var brief = [
                        'Knowledge',
                        'Practical skills',
                        'Social skills and responsibilities',
                        'Values, attitudes, and professionalism',
                        'Communication, leadership and team skills',
                        'Problem solving and scientific skills',
                        'Information management and lifelong learning skills',
                        'Managerial and entrepreneurial skills'
                        ];

        // _.each(domain, function(domain, brief, count) {
        //     MQA.insert({
        //         id: domain,
        //         description: 123
        //     });
        //     console.log(MQA.find().fetch());
        // });

        for (var i = 0; i <= 7; i++) {
            console.log(domain[i]);

            MQA.insert({
                id: domain[i],
                description: brief[i]
            });

        };
        console.log(MQA.find().fetch());
    }

});