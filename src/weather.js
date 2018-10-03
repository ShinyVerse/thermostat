var weatherKey = '507fe712d0005b4303007a083b0f57d5';
function Weather() {
    this.getCurrent = function(city) {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',uk&appid=' + weatherKey, function(data) {
        $('#weather').text(data.main.temp + ' kelvin')
    })
  }
}
