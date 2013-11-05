$(function(){
	// alert("Hello World");

	// select all the list elements and hide them.
	// jQuery('li').hide();
	// jQuery('li').show();

	// lets use the $ symbol. This is an alias for jQuery
	 // $('li').hide();
	 // $('li').show();

	 // lets use method chaining
	 //$('li').hide().show().hide();

	 // Notice that we return a list of all the matching elements.
  //    $('li');
	 // $('li').hide();

	 // select by class attribute, NOTE the dot, .
	 // $('.album').hide();

 	 // select by id attribute, NOTE the hash symbol, #
	 // $('#artists').hide();

	 // select descendants
	 // $('#artists li').hide();
 	 // $('#artists button').hide();
 	 // $('#artists #roger-waters').hide();
   	 // $('#artists #roger-waters-btn').hide();

   	 // hide all descendants
	 // $('#artists li').hide();
	 // only hide chidren list elements
	 // $('#artists > li').hide();

	 // Psuedo selectors
	 // hide Jimmy Page
	 // $('#artists li:first').hide();
	 // hide Robert Plant
	 // $('#artists li:nth-child(2)').hide();
	 // hide every other artist
	 // $('#artists li:odd').hide();
	 // hide instrument bass
	 // $('#artists #roger-waters li:first').hide();
	 // hide the very last li under artist, may not do want you want.
	 // hide the band Led Zeppelin
	 // $('#artists li:last').hide();


	 // Hide if element has attribute 'rel'
 	 // $("#artists li[rel]").hide();
	 // $("#artists li[rel*='zep']").hide();

	 // Add click handlers
	 // $("#add-artist").on('click', function(event){
	 // 	$("#add-artist-form").show();
	 // });

 	//  $("#add-artist-form").on('submit', function(event){
	 // 	var $name = $("#add-artist-form input:first"),
	 // 	$desc = $("#add-artist-form input:nth-child(2)"),
	 // 	$artistHTML,buttonHTML, name, desc;
	 // 	name = $name.val();
	 // 	desc = $desc.val();

	 // 	// construct the new html
	 // 	buttonHTML = "<button id='" + name + "-btn'> Show " + name + "</button>"
	 // 	$artistHTML = $("<li id='" + name + "' class='artist'>" + name + buttonHTML + "</li>");

	 //    // don't let the submit proceed!! It will attempt to reload page.
	 // 	event.preventDefault();
	 // 	$('#artists').append($artistHTML);

	 // 	$("#add-artist-form").hide();
	 // });

});