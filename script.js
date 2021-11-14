$(".level1").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/16/8f/33/168f33328213ef4b913675d3a4eefa11.gif)");
});

$(".start-game").click(function() {
    $(".game").fadeIn();
    $(".start-game").fadeOut();
    $(".start").fadeOut();
    $(".p1-name").text("Aliou Barry");
});

$(".ryu").click(function() {
    $(".sprite").hide();
    $(".sprite-jab-attack").show();

});

$(".ryu").dblclick(function() {
    $(".sprite").hide();
    $(".sprite-jump-attack").show();
    $(".p1-health-progress").css("width", "50%");
});

$(".ryu").hover(function() {
    $(".sprite-taunt").show();
    $(".sprite-ready").hide();
    $(".p1-health-progress").css("width", "100%");
});

$(".ryu").mouseleave(function() {
    $(".sprite-taunt").hide();
    $(".sprite-ready").show();
});

$(".level2").click(function() {
    $(".game").css("background", "url(http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-47.gif)");
});

$(".level3").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/fc/ba/72/fcba729da9284bac3e02633a7b25fda0.gif)");

});