$('.nav-positioner').on("mouseenter", function() {
  $('.nav-text', this).not('#nav-text-home').css( "color", "white" );
  $('.nav-pic', this).not('#nav-pic-home').css( "background-position-y", "-80px" );
});


$('.nav-positioner').on("mouseleave", function() {
   $('.nav-text', this).not('#nav-text-home').css( "color", "#BBB" );
   $('.nav-pic', this).not('#nav-pic-home').css( "background-position-y", "-50px" );
});

var tweet1 = {
    name: "Bob Jones",
    handle: "Jonesy00",
    tweetContent: "zpog nerfa af - ho soaqdqwdqwfd!"
};

var tweet2 = {
    name: "Sam Snead",
    handle: "smooth_1912",
    tweetContent: "Howdy!?!"
};

var test = "tester!"

var myItems = [];
 
for ( var i = 0; i < 30; i++ ) {
    myItems.push( "<li class=\"tweet\">" + tweet1.tweetContent + 
    	"</li><li class=\"tweet\">" + tweet2.tweetContent + "</li>");
}
 
$(function() {
	displayThirtyTweets()
})

function displayThirtyTweets() {
	$( "ol" ).append( myItems.join( "" ) );
}

// $( window ).scroll(function() {
//   $( "ol" ).append( myItems.join( "" ) );
// });

$(window).scroll(function() {
   console.log("scrolltop:" + $(window).scrollTop())
   // // console.log("window-height:" + $(window).height())
   console.log("doc-height:" + $(document).height())
   if($(window).scrollTop() + 800 >= $(document).height()) {
   		$(window).unbind('scroll');
   		setTimeout(function(){$( "ol li:last" ).append(spinner.el)}, 500)
   		// setTimeout(function(){$( "ol li:last" ).append("<li class=\"tweet\">" + spinner.el + "</li>")}, 500)
      setTimeout(displayThirtyTweets,3000);
      setTimeout(function(){$('.spinner').hide()}, 3000)
      console.log("near bottom!");
   }
});

var spinner = new Spinner().spin();
// $( "ol li:last" ).append(spinner.el);

