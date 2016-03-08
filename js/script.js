console.log('hello weather')
var weatherObject_Global = null
// current forecast
// var currentForecastURL = "https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE"

// specific time forecast 
// var specificForecaseURL = "https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME"

//https://api.forecast.io/forecast/d8a03dc60491af5fd9965e0691c2bd54/37.8267,-122.423


//currently-------------------------------------------------------------------------------------//

var buildHTMLString_CurrentWeather = function(dataObj){
	
	var htmlString = '<div class="currentForecast">'
		htmlString +=	'<h1 class="current">' + "Current Forecast" + '</h1>'
		htmlString +=	'<h3 class="current">' + "temperature" + " " + dataObj.currently.temperature + '</h3>'
		htmlString +=	'<h3 class="current">' + "summary" + " " + dataObj.currently.summary + '</h3>'
		htmlString += 	'<h3 class="current">' + "humidity" + " " + dataObj.currently.humidity + '</h3>'
		htmlString += 	'<h3 class="current">' + "pressure" + " " + dataObj.currently.pressure + '</h3>'
		htmlString +=	'<h3 class="current">' + "chance of rain" + " " + dataObj.currently.precipProbability + '</h3>'
		// htmlString +=	'<h3 class="current">' + "current time" + " " + dataObj.currently.time + '<h3>'

		htmlString += '</div>'

		return htmlString 
	}


// var buildHTMLString_CurrentWeather = function(dataObj){
//     console.log('templlllate')
//     console.log(dataObj)
// 	var htmlString = ''

// 		for(var i=0; i<dataObj.currently.length; i++){

// 		var reportedDateTime = new Date(dataObj.hourly.data[i].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"
		
// 		htmlString += '<div class ="currentForecast">'
//         htmlString += 		'<h3 class="current">' + readableDateStr + '<h3>'
//         htmlString += 		'<h3 class="current">' + "temperature" + " " + dataObj.currently.data[i].temperature + '</h3>'
//         htmlString += 		'<h3 class="current">' + "summary" + " " + dataObj.currently.data[i].summary + '</h3>'
//         htmlString += 		'<h3 class="current">' + "chance of rain" + " " + dataObj.currently.data[i].precipProbability + '</h3>'
//         htmlString += 		'<hr/>'
//         htmlString += 	 '</div>'

// 		}

// 	return htmlString	
// }


//end of currently---------------------------------------------------------------------------------//



//daily-------------------------------------------------------------------------------------------//
//daily = weekly forcast 

var buildHTMLString_DailyWeather = function(dataObj){
	var htmlString = ''

         htmlString += '<h1 class="dailyTitle">' +"Weekly Forecast" + '</h1>' 

		for(var i=0; i<dataObj.daily.data.length; i++){

		var reportedDateTime = new Date(dataObj.hourly.data[i].time*1000)
		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

    	htmlString += '<div class ="dailyForecast">'
        htmlString += 		'<h3 class="daily">' + readableDateStr + '<h3>'
        htmlString += 		'<h3 class="daily">' + "temperature" + " " + dataObj.daily.data[i].temperature + '</h3>'
        htmlString += 		'<h3 class="daily">' + "summary" + " " + dataObj.daily.data[i].summary + '</h3>'
        htmlString += 		'<h3 class="daily">' + "chance of rain" + " " + dataObj.daily.data[i].precipProbability + '</h3>'
        htmlString += 		'<hr/>'
        htmlString += 	 '</div>'
        
    }
    
    return htmlString
}



// var buildHTMLString_DailyWeather = function(dataObj){ 

// 	var htmlString = '<div class="dailyForecast">'
// 		htmlString += 	'<h1 class="dailyContainer">' + "Weekly Forecast" + '</h1>'

// 		var dateString = new Date(dataObj.daily.data[0].time*1000)
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dateString.toString() + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[0].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[0].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[0].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[0].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + "Humidity" + dataObj.daily.data[0].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + dataObj.daily.data[0].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[7].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[1].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[1].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj	.daily.data[1].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[1].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + 'Humidity' + " "+ dataObj.daily.data[1].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[1].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[2].time + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[2].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[2].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[2].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[2].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + 'Humidity' + " "+ dataObj.daily.data[2].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[2].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[3].time + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[3].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[3].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[3].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[3].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + "Humidity" + " " + dataObj.daily.data[3].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[3].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[4].time + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[4].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[4].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[4].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[4].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + 'Humidity' + " "+ dataObj.daily.data[4].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[4].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[5].time + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[5].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[5].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[5].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[5].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + 'Humidity' + " "+ dataObj.daily.data[5].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[5].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[6].time + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[6].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[6].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[6].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[6].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + 'Humidity' + " "+ dataObj.daily.data[6].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[6].pressure + '</h3>'

// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[7].time + '</h3>'
// 		// htmlString += 	'<h3>' + '<Weekday>' + dataObj.daily.data[0].icon + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + '<Weekday>' + dataObj.daily.data[7].summary + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "High" + " " + dataObj.daily.data[7].temperatureMax + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Low" + " " + dataObj.daily.data[7].temperatureMin + '</h3>'
// 		htmlString += 	'<h3 class="daily">' + "Chance of Rain" + " " + dataObj.daily.data[7].precipProbability + '</h3>'
// 		// htmlString += 	'<h3>' + 'Humidity' + " "+ dataObj.daily.data[7].humidity + '</h3>'
// 		// htmlString += 	'<h3>' + "Pressure" + " " + dataObj.daily.data[7].pressure + '</h3>'

// 		htmlString += '</div>'

// 	return htmlString

// }


//end of daily-----------------------------------------------------------------------------------------//



//hourly ---------------------------------------------------------------------------------------------//


var buildHTMLString_HourlyWeather = function(dataObj) {
	var htmlString = ''

        htmlString += '<h1 class="hourlyTitle">' +"Hourly Forecast" + '</h1>' 

	    for (var i = 0; i < dataObj.hourly.data.length; i++) {

    	var reportedDateTime = new Date(dataObj.hourly.data[i].time*1000)
		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

    	htmlString += '<div class ="hourlyForecast">'
        htmlString += 		'<h3 class="hourly">' + readableDateStr + '<h3>'
        htmlString += 		'<h3 class="hourly">' + "temperature" + " " + dataObj.hourly.data[i].temperature + '</h3>'
        htmlString += 		'<h3 class="hourly">' + "summary" + " " + dataObj.hourly.data[i].summary + '</h3>'
        htmlString += 		'<h3 class="hourly">' + "chance of rain" + " " + dataObj.hourly.data[i].precipProbability + '</h3>'
        htmlString += 		'<hr/>'
        htmlString += 	 '</div>'
        
    }
    
    return htmlString
}





// var buildHTMLString_HourlyWeather = function(dataObj){

// 	var htmlString = '<div class="hourlyForecast">'
// 		// dataObj.hourly.data[0].time        --- in seconds
// 		// dataObj.hourly.data[0].time * 1000 --- convert to milliseconds for jsDate()

// 		var reportedDateTime = new Date(dataObj.hourly.data[0].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"+" "+"pm"

// 		htmlString +='<h3 class="hourly">' + reportedDateTime + '</h3>'
// 		htmlString += '<hr/>'

// 		htmlString += 	'<h3 class="hourly">' + readableDateStr + '<h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[0].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[0].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[0].precipProbability + '</h3>'
// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[1].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[1].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[1].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[1].precipProbability + '</h3>'
// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[2].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[2].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[2].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[2].precipProbability + '</h3>'
// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[3].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[3].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[3].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[3].precipProbability + '</h3>'
// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[4].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[4].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[4].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[4].precipProbability + '</h3>'
// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[5].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[5].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[5].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[5].precipProbability + '</h3>'
// 		htmlString += '<hr/>'

// 		var reportedDateTime = new Date(dataObj.hourly.data[6].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[6].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[6].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[6].precipProbability + '</h3>'
// 		htmlString += '<hr/>'
	
// 		var reportedDateTime = new Date(dataObj.hourly.data[7].time*1000)
// 		var readableDateStr = reportedDateTime.getHours()-12  + ":"+ reportedDateTime.getMinutes()+"0"

// 		htmlString +=	'<h3 class="hourly">' + readableDateStr + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "temperature" + " " +dataObj.hourly.data[6].temperature + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "summary" + " " +dataObj.hourly.data[6].summary + '</h3>'
// 		htmlString +=	'<h3 class="hourly">' + "chance of rain" + " " +dataObj.hourly.data[6].precipProbability + '</h3>'
		

// 		htmlString += '</div>'
		
// 		return htmlString	
// }


//end of hourly-----------------------------------------------------------------------------------------//




//geolocation--------------------------------------------------------------------------------------------//

var mainContainer = document.querySelector("#mainContainer")

var successCallback = function(positionObject){
	var latitude = positionObject.coords.latitude,
		longitude = positionObject.coords.longitude

	var fullUrl = baseUrl + "/" + latitude + "," + longitude
	$.getJSON(fullUrl).then(
		function(receivedWeatherData){

			weatherObject_Global = receivedWeatherData

			console.log(weatherObject_Global)

			// mainContainer.innerHTML = buildHTMLString_CurrentWeather(weatherObject)
			// mainContainer.innerHTML = buildHTMLString_DailyWeather(weatherObject)
			// mainContainer.innerHTML = buildHTMLString_HourlyWeather(weatherObject)

			// hourly_ForecastView.renderHTML(weatherObject)
			// daily_ForecastView.renderHTML(weatherObject)
			current_ForecastView.renderHTML(weatherObject_Global)

		})

}

var errorCallback = function(error){
	console.log(error)
}


var apiKey = "d8a03dc60491af5fd9965e0691c2bd54"
var baseUrl = "https://api.forecast.io/forecast/" + apiKey 







//routing and viewChanger--------------------------------------------------------------------------------------------//

var ViewConstructor = function(domEl, template_fn){
	this._el = domEl;
	this._buildHTMLString = template_fn

	this.renderHTML = function(inputData){
        console.log( this._buildHTMLString )

		console.log( this._buildHTMLString(inputData) )
		document.querySelector(this._el).innerHTML = this._buildHTMLString(inputData)

	}

}


var handleNavClick = function(evt){
	console.log(evt)
	console.log(evt.target)
	console.log(evt.target.className)
	window.location.hash = evt.target.className
}


//where to end

var controller = function(){
	var hashRoute = window.location.hash.substr(1) // '#hourly' => 'hourly'
	var	hashRoute_parts = hashRoute.split("/")  // splits on '/' (there is no / so returns array of 1)
	var	viewType = hashRoute_parts[0]  // access array of 1 ('hourly')
		// latitude = hashRoute_parts[1],
		// longitude = hashRoute_parts[2]

    // var fullUrl = baseUrl + "/" + latitude + "," + longitude
    
    // var promise = $.getJSON(fullUrl)
    // promise.then(showData)

	if(hashRoute === "current"){
		current_ForecastView.renderHTML(weatherObject_Global)
	}
	if(hashRoute === "weekly"){
		daily_ForecastView.renderHTML(weatherObject_Global)
	}
	if(hashRoute === "hourly"){
		hourly_ForecastView.renderHTML(weatherObject_Global)
	}

}


var current_ForecastView = new ViewConstructor("#mainContainer", buildHTMLString_CurrentWeather)
var daily_ForecastView = new ViewConstructor ("#mainContainer",   buildHTMLString_DailyWeather)
var hourly_ForecastView = new ViewConstructor ("#mainContainer", buildHTMLString_HourlyWeather)

var current_el = document.querySelector('.current')
var hourly_el = document.querySelector('.hourly')
var weekly_el= document.querySelector('.weekly')

current_el.addEventListener("click", handleNavClick)
hourly_el.addEventListener("click", handleNavClick)
weekly_el.addEventListener("click", handleNavClick)

window.addEventListener('hashchange',controller)

navigator.geolocation.getCurrentPosition(successCallback,errorCallback)





