const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn  =  document.querySelector("button");

let  alarmTime, isAlarmSet = false,
ringtone = new Audio("./Lets Make Our Alarm Clock_files/ringtone1.mp3") ;

for(let i = 12; i > 0; i--) {
   i = i<10 ? "0" + i: i;
   let option = `<option value = "${i}" >${i} </option>`;
   selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i = 59; i > 0; i--) {
   i = i<10 ? "0" + i: i;
   let option = `<option value = "${i}" >${i} </option>`;
   selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i = 2; i > 0; i--) {
   let ampm = i == 1? "AM" : "PM" ;
   let option = `<option value = "${ampm}" >${ampm} </option>`;
   selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval( () =>{
   let date = new Date(),
   h = date.getHours(),
   m = date.getMinutes(),
   s = date.getSeconds(),
   ampm = "AM";
   if(h >= 12) {
      h = h -12;
      ampm  = "PM";
   }
   //if hour value is o, set this value to 12
   h = h == 0? h = 12 : h;
   //adding 0 before hr, min, sec if the value is less than 10
   h = h <10 ? "0" + h : h;
   m = m <10 ? "0" + m : m;
   s = s <10 ? "0" + s : s;
   currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
 
   // if(alarmTime == `${h}:${m} ${ampm}` ){
   //    console.log("Alarm is tinging....");
   // }
    if(alarmTime == `${h}:${m} ${ampm}` ){
       ringtone.play();
       ringtone.loop = true;
    }
 }, 1000);
function setAlarm() {
  if(isAlarmSet) {
     alarmTime = "";
     ringtone.pause();
     content.classList.remove("disable");
     setAlarmBtn.innerText = "Set Alarm";
     return isAlarmSet -= false;
  }


   let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
   if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
      return alert("Please, select a valid time too set Alarm")
   }
   isAlarmSet = true;
   alarmTime = time;
   content.classList.add("disable");
   setAlarmBtn.innerText = "💖It's Time to Wake Up💓🥛⏰💖";
   
}

setAlarmBtn.addEventListener("click", setAlarm);










// const currentTime = document.querySelector("h1"),
// content = document.querySelector(".content"),
// selectMenu = document.querySelectorAll("select"),
// setAlarmBtn = document.querySelector("button");

// let alarmTime ;

// for(let i = 12; i>0;i--){
//    i = i<10? "0" + i : i;
//    let option = `<option value = "${i}" > ${i} </option>`;
//    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);

// }
// for(let i = 59; i>0;i--){
//     i = i<10? "0" + i : i;
//     let option = `<option value = "${i}" > ${i} </option>`;
//     selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
     
//  }
//  for(let i = 2; i > 0;i--){
//     let ampm = i == 1 ? "AM" :"PM";
//     let option = `<option value = "${ampm}">  ${ampm}</option>`;
//     selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
     
//  }

//  setInterval(() =>{
//      //geting hours mins and secods
//      let date = new Date(),
//      h= date.getHours(),
//      m = date.getMinutes(),
//      s = date.getSeconds(),
//      ampm = "AM";
//      if(h >= 12) {
//         h = h -12;
//         ampm = "PM";
//      }
//      //the above condtion changes the hour vaue from 0 to 12
//      h = h == 0? h = 12: h;
//      //adding 0 before the hoours , min , sec value is lee than 10
//      h = h < 10 ? "0" + h :h;
//      m = m < 10 ? "0" + m :m;
//      s = s < 10 ? "0" + s :s;

//     currentTime.innerText =  `${h}: ${m}:${s} ${ampm}`;
//      if(alarmTime == `${h}: ${m}:${s} ${ampm}`){
//         console.log("alaram ringing");
//      };
//    },1000);

//    function setAlarm(){
//       let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`
      
//       if(time.includes("Hours") || time.includes("Minute") || time.includes("AM/PM")){
//          return alert("Please , select a valid time to set Alarm!");

//       }
//       alarmTime = time;
//       content.classList.add("disable");
//       setAlarmBtn.innerText = "Clear Alarm";
      
     
//    }
//    setAlarmBtn.addEventListener("click", setAlarm);