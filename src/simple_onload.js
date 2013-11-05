$(function(){
	 //alert("Hello World");
	 
	// select all the list elements and hide them.
	//var allMyLis = jQuery('li').hide();
	//console.log("All my lis are " + allMyLis);

	// $ is an alias for jQuery

	// id selector, '#'
	// $('#add-artist-form').show();

	// class selector, '.'
	//$('.btn').hide();

	// descendant selector
	// $('#roger-waters li').hide();

	// child selector, direct descendant selector.
	// $('#roger-waters > li').hide();

	// $('#jimmy-page-btn').hide();

	// Pseudo selectors.
	// $('#artists li:first').hide();
	// $('#artists li:nth-child(2)').hide();
	// hide every other artist
	// $('#artists li:odd').hide();
	 // hide instrument bass
	 // $('#roger-waters li:first').hide();
	 // hide the very last li under artist, may not do want you want.
	 // hide the band Led Zeppelin
	 // $('#roger-waters li:last').hide()

	 // Hide if element has attribute 'rel'
 	 // $("#artists li[rel]").hide();
	 //$("#artists li[rel*='zep']").hide();


	 // event handlers
	 
	  // Add click handlers
	  $("#add-artist").on('click', function(event){
	  	$("#add-artist-form").show();
	  });


	  $("#add-artist-form").on('submit', function(event){
	 	var $name = $("#add-artist-form input:first"),
	 	$desc = $("#add-artist-form input:nth-child(2)"),
	 	$artistHTML,buttonHTML, name, desc;
	 	name = $name.val();
	 	desc = $desc.val();
	 		// construct the new html
	 	buttonHTML = "<button id='" + name + "-btn'> Show " + name + "</button>"
	 	$artistHTML = $("<li id='" + name + "' class='artist'>" + name + buttonHTML + "</li>");

	    // don't let the submit proceed!! It will attempt to reload page.
	 	event.preventDefault();
	 	$('#artists').append($artistHTML);

	 	$("#add-artist-form").hide();
	 });


});