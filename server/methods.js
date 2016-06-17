Meteor.methods ({
  addParticipant(item) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('not authorized');
    }
    Participants.insert({
      title : item.title,
      authors : item.authors,
      section: item.section,
      abstract : item.abstract,
      organization : item.organization,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
});
