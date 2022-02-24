// Adding 0 before each minutes and seconds
function addingZero(time){
    if (time <= 9){
        return '0' + time;
    }
    return time;
}
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDate = new Date();
var cToday = 'Today is: ' + currentDate.toLocaleString(
    // If it's default, set the language of your pc
    'default', {weekday: 'long'}
);
var cHour = 'Current time is: ' + currentDate.getHours() + ':' + addingZero(currentDate.getMinutes()) +':' + addingZero(currentDate.getSeconds());
console.log(cToday);
console.log(cHour)
