// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Mongo.Collection("players");

MQA = new Mongo.Collection("mqa");

Authors = new Mongo.Collection("authors");

Articles = new Meteor.Collection('articles');

Programmes = new Meteor.Collection('programmes');