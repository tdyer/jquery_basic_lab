var RCApp = RCApp || {};

RCApp.RecordLabel = function(name, description){
    this.name = name;
    this.description = description;
    this.artists = [];
    this.albums = [];
    // this.artistsEl = document.getElementById('artists');
    // this.albumsEl = document.getElementById('albums');
    // this.hideNewArtistForm();
    // this.hideNewAlbumForm();

    // document.getElementById('rc-name').innerHTML = "<h1>" + this.name + "</h1>";
    // document.getElementById('rc-description').innerHTML = "<h3>" + this.description + "</h3>";

    $('#rc-name').append("<h1>" + this.name + "</h1>");
    $('#rc-description').append("<h3>" + this.description + "</h3>");

    var mylabelname = $('#rc-description').innerHTML;

    $('#add-artist-form').on('submit', this.createArtist.bind(this));
    $('#add-album-form').on('submit', this.createAlbum.bind(this));
};

// Instance Methods
RCApp.RecordLabel.prototype.createArtist = function(event){
 // TODO: cache the add artist input fields
 var name = $('#add-artist-name').val(),
 desc = $('#add-artist-desc').val(),
 artist = new RCApp.Artist(name, desc);
 artist.generateHTML();
 this.artists.push(artist);
 RCApp.RecordLabel.hideArtistForm();
 event.preventDefault();
 return false;
};

RCApp.RecordLabel.prototype.createAlbum = function(event){
 var name = $('#add-album-name').val(),
 desc = $('#add-album-desc').val(),
 genre = $('#add-album-genre').val(),
 album = new RCApp.Album(name, desc, genre);
 album.generateHTML();
 this.albums.push(album);
 RCApp.RecordLabel.hideAlbumForm();
 event.preventDefault();
 return false;
};

// Class Methods
RCApp.RecordLabel.setupHandlers = function(){
  // this.addArtistButtonHandler();
 $('#add-artist').on('click', this.showArtistForm);
 $('#add-album').on('click', this.showAlbumForm);
};

RCApp.RecordLabel.showArtistForm = function(){
  $('#add-artist-form').show();
};

RCApp.RecordLabel.showAlbumForm = function(){
  $('#add-album-form').show();
};

RCApp.RecordLabel.hideArtistForm = function(){
  $('#add-artist-form').hide();
};

RCApp.RecordLabel.hideAlbumForm = function(){
  $('#add-album-form').hide();
};


