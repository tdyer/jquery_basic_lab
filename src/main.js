// namespace for our application
var RCApp = RCApp || {};

// on DOM loaded do this
$(function(){ 
 RCApp.current_recordLabel = RCApp.current_recordLabel || new RCApp.RecordLabel("Atlantic", "Atlantic Record Label");
 RCApp.RecordLabel.hideArtistForm(); 
 RCApp.RecordLabel.hideAlbumForm(); 
 RCApp.RecordLabel.setupHandlers();

});

