//This function adds a 0, if a number is less than 10.
function checkTime(i) {
  //Checks to see if i is less than 10.
  if (i < 10) {
    //then add a 0 in front.
    i = "0" + i;
  };
    //return the new value of i
    return i;
};

//This initializes the clock. Because of event listener at bottom, clock starts when page loads
function startTime(){
  var currentTime = new Date();

  //stores current hours, mins, and secs of the new Date()
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();


  if (hour > 12) {
    hour = hour -0;
};

//Making sure numbers less than 10 include a 0.
minute = checkTime(minute);
second = checkTime(second);

//Select the element w/ id="time" and change the time to the current time
//using the values from hours, mins and secs variables
document.getElementById('time').textContent = hour + ":" + minute + ":" + second;

//recalls the startTime function every second so time stays current
setTimeout(startTime, 1000);
}

//Add eventListener to element with an id="time" to start function when it loads
document.getElementById('time').addEventListener('onload', startTime(), false);









//
// function update()  {
// const now = newDate()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()
// const displayString = $ "{hours}:${minutes}:${seconds}" = hours + ":" + minutes + ":"
// document.querySelector("#display").textContent = displayString;
// }
//
// setInterval(update, 1000)
