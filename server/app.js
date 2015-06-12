Meteor.startup(function() {

    var d = new Date();
    var time = 'The time is now ' + d.getHours() + '.' + d.getMinutes();
    var author = 'Leonardy';

    if (d.getHours() < 4) {
        console.log('Good night, ' + author + ' :) ' + time);
    } 
    else if (d.getHours() < 12) {
        console.log('Good morning, ' + author + ' :) ' + time);
    } 
    else if (d.getHours() < 18) {
        console.log('Good afternoon, ' + author + ' :) ' + time);
    } 
    else if (d.getHours() < 24) {
        console.log('Good evening, ' + author + ' :) ' + time);
    } 
    else if (d.getHours() < 24) {
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
    // console.log("First" + articles);

    Articles.remove({});
    console.log('Articles emptied');

    if (! Articles.findOne()){
      var articles = [
        {id: '1', title: 'Elon Musk is the raddest CEO', body: 'This is article 1'},
        {id: '2', title: 'Article 2', body: 'This is article 2'},
        {id: '3', title: 'Article 3', body: 'This is article 3'}
      ];
      articles.forEach(function (article) {
        Articles.insert(article);
      })

      console.log(articles);
    }

    Programmes.remove({});
    console.log('Programmes emptied');

    if (Programmes.find().count() === 0) {
        Programmes.insert({
            id: '481BCS',
            name: 'B. Sc (Hons) in Computer Science',
            aims: 'To provide students with a thorough grounding in the theoretical and practical aspects of the Computer Science discipline necessary for successful careers as system designers and builders in the continually developing information technology environment',
            learning_outcomes: [
                {
                    id: '1',
                    name: 'PO1',
                    content: 'Demonstrate knowledge and understanding of essential facts, concepts, principles, and theories relating to Computer Science',
                    learning_domains: ['Knowledge']
                },
                {
                    id: '2',
                    name: 'PO2',
                    content: 'Apply theoretical principles of Computer Science in relevant areas',
                    learning_domains: ['Practical Skills']
                },
                {
                    id: '3',
                    name: 'PO3',
                    content: 'Demonstrate theoretical computing knowledge in analyzing, modeling, designing, developing, and evaluating computing solutions; and integrate various technology/ solutions',
                    learning_domains: ['Practical Skills']
                },
                {
                    id: '4',
                    name: 'PO4',
                    content: 'Communicate effectively with peers, clients, superiors and society at large',
                    learning_domains: ['Social Skills and Responsibilities', 'Communication, Leadership and Team Skills']
                },
                {
                    id: '5',
                    name: 'PO5',
                    content: 'Demonstrate teamwork, leadership, interpersonal and social skills',
                    learning_domains: ['Social Skills and Responsibilities', 'Communication, Leadership and Team Skills']
                },
                {
                    id: '6',
                    name: 'PO6',
                    content: 'Apply skills and principles of lifelong learning in academic and career development',
                    learning_domains: ['Information Management and Lifelong Learning Skills']
                },
                {
                    id: '7',
                    name: 'PO7',
                    content: 'Utilize relevant techniques and demonstrate analytical and critical thinking skills in problem solving',
                    learning_domains: ['Problem Solving and Scientific Skills']
                },
                {
                    id: '8',
                    name: 'PO8',
                    content: 'Demonstrate professionalism and social and ethical considerations in accordance with ethical and legal principles',
                    learning_domains: ['Values, attitudes and professionalism']
                },
                {
                    id: '9',
                    name: 'PO9',
                    content: 'Apply broad business and real world perspectives daily and demonstrate entrepreneurial skills',
                    learning_domains: ['Managerial and Entrepreneurial Skills']
                },
            ],
            subjects: [
                {
                    id: 'PRG1102',
                    name: 'Programming Principles',
                    body_of_knowledge: 'Programming Languages',
                    rationale: ['Understand programming logic', 'Understand the fundamental principles of programming', 'Understand different types of data and operators and demonstrate knowledge of programming'],
                    year_offered: 1,
                    term_offered: 1,
                    credit: 3,
                    prerequisite: ['PRG1101'],
                    transferable: ['An ability to use skills and techniques applicable in the field of basic programming', 'Ability to make decisions related to programming point of view', 'Ability to function effectively in a network management team as a beginner programmer'],
                    synopsis: 'This course introduces basic programming to students.  It is a middle-level language which comprises a combination of both high-level and low-level language features',
                    modes: ['Lecture', 'Practical'],
                    references: ['Deitel H.M and Deitel P.J., 2009.  C How to Program.  6th edition, Prentice-Hall', 'Stroustrup B., 2008. Programming: Principles and Practice Using C++.  Addison-Wesley'],
                    information: 'nil',
                    learning_outcomes: [
                        {
                            id: 'slo-1',
                            content: 'Comprehend the basic concepts & common programming terminology',
                            link: ['po-1', 'po-2']
                        },
                        {
                            id: 'slo-2',
                            content: 'Understand the rationale and apply the best programming practices',
                            link: ['po-1', 'po-2', 'po-8']
                        },
                        {
                            id: 'slo-3',
                            content: 'Construct a simple programme using various control structures and functions',
                            link: ['po-1', 'po-2', 'po-7']
                        },
                        {
                            id: 'slo-4',
                            content: 'Demonstrate the ability to use pointers and array ',
                            link: ['po-1', 'po-2', 'po-7']
                        }
                    ],
                    assessment: [
                        {
                            type: 'Final Examination',
                            weight: 50
                        },
                        {
                            type: 'Class Test',
                            weight: 20
                        },
                        {
                            type: 'Lab Assignment 1',
                            weight: 15
                        },
                        {
                            type: 'Lab Assignment 2',
                            weight: 15
                        }
                    ],
                    content_outline: [
                        {
                            id: 'content-1',
                            topic: 'Programming Basics',
                            content: 'Variables, Arithmetic operators, Equality operators, Relational operators, Escape sequences. Practical Topics: Program compilation and execution, Input, output, and arithmetic operators',
                            lecture: 2,
                            tutorial: 0,
                            practical: 2,
                            selfstudy: 3,
                            total: 7
                        },
                        {
                            id: 'content-2',
                            topic: 'Control Structures',
                            content: 'Selection structures, Repetition structures, Assignment operators, Increment and decrement operators, Break and continue statements. Practical Topics: Selection structures, Repetition structures, Break statements, continue statements, assignment operators',
                            lecture: 2,
                            tutorial: 0,
                            practical: 6,
                            selfstudy: 4,
                            total: 12
                        },
                        {
                            id: 'content-3',
                            topic: 'Control Structures',
                            content: 'Math library functions, Function definitions, Function prototypes, Header files, Inline functions, Function templates. Practical Topics: Math library functions and user-defined functions. Header files, inline functions, function templates',
                            lecture: 2,
                            tutorial: 0,
                            practical: 12,
                            selfstudy: 6,
                            total: 20
                        },
                        {
                            id: 'content-4',
                            topic: 'Arrays',
                            content: 'Single-dimensional arrays, Multi-dimensional arrays, Passing arrays to functions. Practical Topics: Arrays, Passing arrays to functions',
                            lecture: 2,
                            tutorial: 0,
                            practical: 12,
                            selfstudy: 6,
                            total: 20
                        },
                        {
                            id: 'content-5',
                            topic: 'Pointers',
                            content: 'Pointer variable declarations and initialization, Pointer operators. Practical Topics: Pointers',
                            lecture: 2,
                            tutorial: 0,
                            practical: 12,
                            selfstudy: 6,
                            total: 20
                        },
                        {
                            id: 'content-6',
                            topic: 'File Processing',
                            content: 'Data hierarchy, Files and streams, Sequential-access file, Random-access file. . Practical Topics: Creating and writing data to data from sequential-access file and random-access file, Reading data from sequential-access file and random-access file.',
                            lecture: 4,
                            tutorial: 0,
                            practical: 12,
                            selfstudy: 6,
                            total: 22
                        },
                        {
                            id: 'content-7',
                            topic: 'Assessment',
                            content: 'Coursework components. 2-hour examination',
                            lecture: 0,
                            tutorial: 0,
                            practical: 5,
                            selfstudy: 20,
                            total: 25
                        },
                    ]
                }
            ]
        });
    }

    // console.log(Programmes.find({ id: '481BCS' }).fetch());

    var p = Programmes.find({ id: '481BCS' }).fetch();

    /*Meteor.publish("programmes", function () {
        console.log('published');
        return Programmes.find({});
      });*/

    console.log(p[0].aims);

    /*if (MQA.find().count() === 0) {
        var domain = [
            {
                id: '1', title: 'MQF1', brief:'Knowledge',
                link: [
                    {
                        programme: 'B. Sc (Hons) in Computer Science',
                        plo: []
                    }

                ]
            }
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
            // console.log(domain[i]);

            MQA.insert({
                id: domain[i],
                description: brief[i]
            });

        };
        // console.log(MQA.find().fetch());
    }*/

    if (Authors.find().count() === 0) {
        var authors = [
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

    }

});