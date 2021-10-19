


let userName = prompt("Lütfen isminizi giriniz")

let nameData = document.querySelector("#myName");
nameData.innerHTML = `${userName}`


let clocked = document.querySelector("#myClock");

function showTime(){
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDay();
    let dList = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    hour = hour<10 ? "0"+ hour: hour;
    min = min <10 ? "0" + min :min;
    second = second<10 ? "0"+second : second;
    //clock.innerHTML = `test`
    clocked.innerHTML=`${hour}:${min}:${second} ${dList[day]}`;
    setTimeout(showTime,1000);
}


showTime();
