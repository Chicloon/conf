var require = meteorInstall({"server":{"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/methods.js                                                        //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Meteor.methods({                                                            // 1
  addParticipant: function addParticipant(item) {                           // 2
    // if(!Meteor.userId()) {                                               //
    //   throw new Meteor.Error('not authorized');                          //
    // }                                                                    //
    Participants.insert({                                                   // 6
      title: item.title,                                                    // 7
      authors: item.authors,                                                // 8
      section: item.section,                                                // 9
      abstract: item.abstract,                                              // 10
      organization: item.organization,                                      // 11
      createdAt: new Date(),                                                // 12
      user: Meteor.userId()                                                 // 13
    });                                                                     // 6
  }                                                                         // 15
});                                                                         // 1
//////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/publish.js                                                        //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
console.log("I'm a live");                                                  // 1
                                                                            //
Participants = new Mongo.Collection("participants");                        // 3
                                                                            //
Meteor.publish("allAbstracts", function () {                                // 5
  return Participants.find();                                               // 6
});                                                                         // 7
//////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       //
});                                                                         // 5
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/methods.js");
require("./server/publish.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
