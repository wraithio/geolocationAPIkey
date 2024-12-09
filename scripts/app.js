import {APIKEY} from './environment.js'

//this is a built in API that will allow the user to get their current location upon accepting the prompt

//navigator returns the geolocation object
//getCurrentPosition() returns the current position of the user

navigator.geolocation.getCurrentPosition(success, errorFunc);
//think of this as an if else statement, if the user accepts it is successful, if not, it is an error

//example of a geolocation object
{
    coords:{
        latitude: -180.4535
        longitude: 35.23424
    }
}

function success(position){
    console.log(position)
    console.log('Our latitude is ' + position.coords.latitude)
    console.log('Our longitude is ' + position.coords.longitude)
    console.log('Now we know where you are!')
}

function errorFunc(error){
    console.log(error.message)
}

success();

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

    
apiCall();