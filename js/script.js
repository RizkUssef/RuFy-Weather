let seasion = "winter";

function change(bg_image,text_color,weather_icon,seasion_name){
    $('#main_section').css("background-image", bg_image);
    $("h1, h3, h4, p, #find, #text").css("color", text_color)
    $("#weather_icon").attr("src", weather_icon);
    $("#seasion").text(seasion_name);
}
switch (seasion) {
    case "winter":
        change('url("../img/winter.jpg")',"#9A5C5C","../img/cloudy winter.png","Winter")
        break;
    case "autumn":
        change('url("../img/autumn.jpg")',"#fff","../img/cloudy white.png","Autumn")
        $("#find, #text").css("color", "#000");
        break;
    case "spring":
        change('url("../img/spring.jpg")',"#000","../img/cloudy black.png","Spring")
        break;
    case "summer":
        change('url("../img/summer.jpg")',"#000","../img/cloudy black.png","Summer")
        break;

    default:
    break;
}

$(function(){
    $(".loader").fadeOut(3000,function(){
        $(".loading").fadeOut(1000)
    })
})
