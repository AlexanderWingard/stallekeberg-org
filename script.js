window.onhashchange = function() {
    var selected = $("#outline-container-" + location.hash.substr(1));
    var all = $("div[id^='outline-container-']");
    if (selected.length == 0) {
        selected = all.first();
    }
    all.each(function(index) {
        if($(this).attr("id") != selected.attr("id")) {
            $(this).hide();
        }
        else {
            $(this).show();
        }
    }
            );
    var id_parts = selected.attr("id").split("-");
    var selected_id = id_parts[id_parts.length-1];
    $("#menu a").removeClass("active");
    $("#menu a[href='#" + selected_id + "']").addClass("active");
}

$(document).ready(function() {
    $("#content").addClass("ui text container");
    $("#table-of-contents h2").text("Meny");
    var links = $("#table-of-contents ul li a")
        .each(function() {
            $(this).addClass("item");
        })
    $("#table-of-contents").detach();
    $("body").prepend("<div id='menu' class='ui stackable menu'></div>")
    $("#menu").append("<div class='item'><strong>www.stallekeberg.com</strong></div>")
    $("#menu").append(links)
    window.onhashchange();
})

