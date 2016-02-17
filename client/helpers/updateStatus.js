// toggles the driving.mode between autonomous, manual and autoMan
updateStatus = function(){
  var features = profile.features;
  var status = profile.status;
  for (var key in features) {
    status[key] = features[key];
    if (status[key] === 'on') {features[key] = true;}
  }
    Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } })
}

updateFeatures = function(){
  var features = profile.features;
  var status = profile.status;
  for (var key in features) {
    features[key] = status[key];
    if (status[key] === true) {status[key] = true;}
  }
    Meteor.users.update(Meteor.userId(), { $set: { "profile.features": features } })
}
