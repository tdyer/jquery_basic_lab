# Javascript Record Company

## Overview
   * Started about 2006 by John Resig
   * Write less do more.
   * Allows you to not worry about the differences in browsers - not as much of a problem now but still is an issue. 
   * Makes working with the DOM much, much easier. 
   * We’ve all been to pages where we see them move, disappear, hide
   and this is how it’s typically done in a web app. How when you
   click a button and it’s replaced by a piece of text.
   * THE go to Javascript library that:
     * [DOM Element Selection](http://api.jquery.com/category/selectors/)
     * [DOM Element Traversal](http://api.jquery.com/category/traversing/)
     * [DOM Manipulation](http://api.jquery.com/category/manipulation/)
     * [Event handling](http://api.jquery.com/category/events/)
     * [Animation](http://api.jquery.com/category/effects/)
     * [Ajax](http://api.jquery.com/category/ajax/)
   * [JQuery](http://jquery.com/)

### Step One
  * Document (DOM) is ready.
    * Open up the index.html file so we can use jQuery page load.
      * Add the remote reference to the jquery library, served by google's CDN.
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

      * Add simple on load script.
        <script src='src/simple_onload.js'></script>
    $(document).ready(function(){
      alert("Hello World");
    });
  * Using $ function.
    jQuery is aliased to $. So jQuery('li').hide() is the same as $('li').hide();
  * Select all elements using tags. Hide/Show all the li and forms.
    $('li').hide();
    $('li').show();
    $('form').show();
    $('form').show();
  * Select elements using the class attribute.
    Select elements using the class attribute. $('.album').hide();

    $('.album').hide();
    
  * Select elements by id

  * Select descendants.
    $('body li');

  * Select children, direct descendants.
    $('body > li').hide();
    $('body > li').show();
  * Select multiple.
    $('.album, #add-album').hide();
  * Pseudo Selector
    $('.album#first);

### Reference 



