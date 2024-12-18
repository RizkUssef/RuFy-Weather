let seasion = "winter";

function change(bg_image, text_color, weather_icon, seasion_name) {
    $('#main_section').css("background-image", bg_image);
    $("h1, h3, h4, p, #find, #text").css("color", text_color)
    $("#weather_icon").attr("src", weather_icon);
    $("#seasion").text(seasion_name);
}


$(function () {
    $(".loader").fadeOut(3000, function () {
        $(".loading").fadeOut(1000)
    })
})

function input() {
    return $("#location").val();
}

$("#find").on("click", function (e) {
    e.preventDefault();
    getData(input());
})
getData("Cairo");
async function getData(location) {
    try {
        let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ddc255c5f9b84eea842142909241812&q=${location}&days=4`);
        let db = await data.json();
        if (db.error) {
            alert("Enter vaild country name jvkjbvkjblblb");
        }else{
            $("#current_deg").text(`${db.current.temp_c}° C`);
            $("#city").text(db.location.name);
            $("#current_date").text(db.current.last_updated);
            let v = db.forecast.forecastday;
            let cont = "";
            for (let i = 0; i < v.length; i++) {
                let dateObject = new Date(v[i].date);
                let dayName = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
                let date = v[i].date.split("-");
                cont += `<div class="day">
                            <div class="day_name">
                                <h4>${dayName}</h4>
                            </div>
                            <div class="img">
                                <img src=${v[i].day.condition.icon} alt="">
                            </div>
                            <div class="degree">
                                <h4>${v[i].day.maxtemp_c}° C</h4>
                                <p>${v[i].day.mintemp_c}° C</p>
        
                            </div>
                            <div class="date">
                                <p class="condition">${v[i].day.condition.text}</p>
                                <h4 class="date_num">${date[2]} Dec</h4> 
                            </div>
                    </div>`;
            }
            $(".days").html(cont);
            let today = new Date();
            let dateString = today.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
            let date_num =$(".date_num").eq(0).text().split(' ')[0];
        
            if (dateString.split("/")[1] === date_num) {
                $(".day").eq(0).addClass("active");
            }
            switch (seasion) {
                case "winter":
                    change('url("../img/winter.jpg")', "#9A5C5C", "../img/cloudy winter.png", "Winter")
                    break;
                case "autumn":
                    change('url("../img/autumn.jpg")', "#fff", "../img/cloudy white.png", "Autumn")
                    $("#find, #text").css("color", "#000");
                    break;
                case "spring":
                    change('url("../img/spring.jpg")', "#000", "../img/cloudy black.png", "Spring")
                    break;
                case "summer":
                    change('url("../img/summer.jpg")', "#000", "../img/cloudy black.png", "Summer")
                    break;
        
                default:
                    change('url("../img/autumn.jpg")', "#fff", "../img/cloudy white.png", "Autumn")
                    break;
            }
        }
    } catch (error) {
        alert("Enter vaild country name");
    }
}