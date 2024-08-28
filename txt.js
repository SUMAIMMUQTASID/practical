$(document).ready(function(){
    // toggle in silde
    $("#toggle-button").click(function(){
        $("#toggle-image").slideToggle();


    });
    // card
    $("toggle-button").click(function(){
        $("modal-dialog").slideToggle();

    });
    
    // Animation and Read More/Read Less functionality
    $("#read-more-button").click(function(){
        $("#more-text").slideToggle();
        if ($("#read-more-button").text() == "Read More") {
            $("#read-more-button").text("Read Less");
        } else {
            $("#read-more-button").text("Read More");
        }
    });

    // Scroll button functionality
    $("#scrollBtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Show/hide scroll button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $("#scrollBtn").fadeIn();
        } else {
            $("#scrollBtn").fadeOut();
        }
    });
});
