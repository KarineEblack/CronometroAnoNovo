
const dayE = document.getElementById('dias');
const hoursE = document.getElementById('horas');
const minutesE = document.getElementById('minutos');
const secondsE = document.getElementById('segundos');
 
const newYears = '1 May 2024';
function contador (){
    const newYearsDate = new Date (newYears);
    const currentDate = new Date();
 
    const totalseconds = (newYearsDate - currentDate) / 1000;
 
    const days = Math.floor(totalseconds/3600/24);
    const hours= Math.floor(totalseconds/3600) %24;
    const minutes= Math.floor(totalseconds/60) % 60;
    const seconds= Math.floor(totalseconds % 60);
 
    dayE.innerHTML = days;
    hoursE.innerHTML = hours;
    minutesE.innerHTML = formatarTime(minutes);
    secondsE.innerHTML = formatarTime(seconds);
     
    console.log(days, hours, minutes, seconds);
 
}
function formatarTime (time){
    return time < 10 ? ( `0${time}`) : time;
}
contador();

 
setInterval(contador, 1000)

