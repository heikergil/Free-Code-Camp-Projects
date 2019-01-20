$( document ).ready(function() {
    var apiUrl;
      var apiLat;
      var apiLong;
      var options = {
      enableHighAccuracy: false,
      };
    function success(position) {
     apiLat = position.coords.latitude;
    apiLong = position.coords.longitude;
    apiUrl="https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
    
     /*Making JSON call*/
        $.getJSON(apiUrl, function(json){
               $("#temp").html((json.main.temp).toFixed(0)+" °C/f");
          $("#location").html(json.name +', '+json.sys.country);
          $("#wicon").html('<img src="'+json.weather[0].icon+'" height="100px" width="100px">');
          $('#description').html(json.weather[0].description);
          switch (json['weather'][0].description){
            case 'broken clouds':
            case 'scattered clouds':
            case 'few clouds':
     $("body").addClass("broken-clouds");
                            break;
               case 'light rain':
               case 'rain':
               case 'shower rain':
            case 'heavy intensity drizzle':
            case 'light intensity drizzle':
              $("body").addClass("rain");
                            break;
              case 'thunderstorm':
             $("body").addClass("thunderstorm");
                            break;
              case 'snow':
              case 'mist':
            case 'haze':
            $("body").addClass("snow");
                            break;
                
                 case 'clear sky':
          $("body").addClass("clear-sky");
                            break;
           
          }
        
      var tempC = (json.main.temp).toFixed(0);
       /*temeperature in fahrenheit*/
        var tempF=((tempC * (9/5) + 32)).toFixed(0);
            /*toggle °C to °F*/
          $("#temp").addClass("celsius");
      $( "#temp" ).click(function() {
      $( "#temp" ).empty();
         if ($("#temp").hasClass("celsius")){
             $("#temp").html(tempF+" °F/c");
                    $("#temp").removeClass("celsius").addClass("fahrenheit");
                     
           } else {
             $("#temp").html(tempC+" °C/f");
                      $("#temp").removeClass("fahrenheit").addClass("celsius");
           }    
             }); 
         
      });
    
    }
    
    function error(err) {
     $( "#location" ).html("we couldn't get your coordinates, try searching for your city instead");
    $( "form" ).removeClass("hidden");
    
    window.cityinput = function() {
    var cityname = document.getElementById("userInput").value;
    $( "form" ).addClass("hidden");
    
    apiUrl="https://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=metric"+"&appid=38cb4a78b57b4832242b09fc0609a7ce"; 
     /*Making JSON call*/
       $.getJSON(apiUrl, function(json){
          $("#temp").html((json['list']['0'].main.temp).toFixed(0)+" °C/f");
          $("#location").html(json.city.name +', '+json.city.country);
          $("#wicon").html('<img src='+'https:' + '//' + "openweathermap.org/img/w/" + json['list']['0'].weather['0'].icon + '.png' + ' height="100px" width="100px">');
          $('#description').html(json['list']['0'].weather['0'].description);
          switch (json['list']['0'].weather['0'].main){
            case 'broken clouds':
            case 'scattered clouds':
            case 'few clouds':
     $("body").addClass("broken-clouds");
                            break;
               case 'light rain':
               case 'Rain':
               case 'shower rain':
            case 'heavy intensity drizzle':
            case 'light intensity drizzle':
              $("body").addClass("rain");
                            break;
              case 'thunderstorm':
             $("body").addClass("thunderstorm");
                            break;
              case 'snow':
              case 'mist':
            case 'haze':
            $("body").addClass("snow");
                            break;
                
                 case 'clear sky':
                 case "Clear":
          $("body").addClass("clear-sky");
                            break;
           
          }
        
      var tempC = (json['list']['0'].main.temp).toFixed(0);
       /*temeperature in fahrenheit*/
        var tempF=((tempC * (9/5) + 32)).toFixed(0);
            /*toggle °C to °F*/
          $("#temp").addClass("celsius");
      $( "#temp" ).click(function() {
      $( "#temp" ).empty();
         if ($("#temp").hasClass("celsius")){
             $("#temp").html(tempF+" °F/c");
                    $("#temp").removeClass("celsius").addClass("fahrenheit");
                     
           } else {
             $("#temp").html(tempC+" °C/f");
                      $("#temp").removeClass("fahrenheit").addClass("celsius");
           }    
             }); 
         
      });
    };
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
       });