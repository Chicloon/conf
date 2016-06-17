console.log("I'm a live");

Participants = new Mongo.Collection ("participants");

Meteor.publish("allAbstracts", function (){
  return Participants.find();
});
