var RCApp = RCApp || {};

RCApp.Album = function(name, description, genre){
	this.name = name;
	this.description = description;
	this.genre = genre;
};

RCApp.Album.prototype.generateHTML = function(){
   var $albums_list = $('#albums'),
   html = "<li>Name:" + this.name + "<br/>Description:<p>" + this.description + "</p><br/>Genre:<p>" + this.genre +"</p></li>";

   $albums_list.append(html);
};