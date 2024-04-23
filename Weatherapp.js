function displayWeather(){
    let city=document.getElementById('cityname').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f6a03400e71192465a1e779ac33edf25`)
    .then(Response=> Response.json())
    .then(data=>{
        showdata(data);
    })
    .catch(err=>{
        console.log(err);
        result.innerHTML=`<h4>City Not Found..</h4>
                          <h4>Please Enter Another City Name</h4>`
                          document.getElementById('cityname').value="";                          
    });
}   document.getElementById('cityname').value="";
function showdata(data){
    let icon=data.weather[0].icon
    let result=document.getElementById('result');
    result.innerHTML=`<img src='https://openweathermap.org/img/wn/${icon}@2x.png' 
                      <h4> ${data.name},${data.sys.country}</h4>
                      <h4>Temperature: ${data.main.temp}&deg;c</h4>
                      <h4>Cloud: ${data.weather[0].description}</h4>
                      <h4>Humidity:  ${data.main.humidity}%</h4>
                      <h4>Wind Speed:  ${data.wind.speed} mi/h</h4>
                      <h4>visibility:  ${data.visibility}ML</h4>
                      <h4>Pressure:  ${data.main.pressure} hPa</h4>
                      `
                      document.getElementById('cityname').value="";
}
document.getElementById('weatherdetail').addEventListener('click',displayWeather,bullet);
function bullet(){
    myvar =setTimeout(        
        document.querySelector('#loader').style.display ="none",
        document.querySelector('#result').style.display ="block"
        ,1000);
    }

