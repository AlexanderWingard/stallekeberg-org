window.onhashchange = function() {
    var selected = "outline-container-" + location.hash.substr(1);
    $("div[id^='outline-container-']").each(function(index) {
        if($(this).attr('id') != selected) {
            console.log($(this).attr('id'))
            $(this).hide();
        }
        else {
            $(this).show();
        }
    }
                                           )
}

$(document).ready(function() {
    $("#content").addClass("ui text container");
    $("#table-of-contents h2").text("Meny");
    window.onhashchange();
})

