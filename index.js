function getWeatherData() {
    var cityName = $('#cityInput').val();

    // Make sure to replace 'your_api_key_here' with your actual API key
    var apiUrl = `https://localhost:7264/api/Weather/${cityName}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            displayWeatherData(data);
        },
        error: function (error) {
            console.error('Error fetching weather data:', error);
            $('#weatherData').html('<p>Error fetching weather data. Please try again.</p>');
        }
    });
}

function displayWeatherData(data) {
    var weatherHtml = '<h2>Weather Information</h2>';

    weatherHtml += '<p>Temperature: ' + data.main.temp + 'K</p>';
    weatherHtml += '<p>Feels Like: ' + data.main.feels_like + 'K</p>';
    weatherHtml += '<p>Humidity: ' + data.main.humidity + '%</p>';
    weatherHtml += '<p>Weather: ' + data.weather[0].main + ' - ' + data.weather[0].description + '</p>';
    // Add more information as needed

    $('#weatherData').html(weatherHtml);
}