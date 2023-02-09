const daysPTag= document.getElementById("days")
const hoursPTag= document.getElementById("hours")
const minutesPTag= document.getElementById("minutes")
const secondsPTag= document.getElementById("seconds")
const changeButton= document.getElementById("changeButton")
const pastIntervals= document.getElementById("pastIntervals")
const numberPTag= document.getElementById("numberPTag")
const inputForm = document.getElementById("inputForm")
let seconds=0
let minutes=0
let hours=0
let days=0
let secondsTimer;
let buttonBoolean= false
let showRigForm= false
function startTimer(){
    if (buttonBoolean===false) {
        changeButton.innerHTML= "stop interval"
        secondsTimer= setInterval(CountSeconds,(1000))
        buttonBoolean=true
    } else if (buttonBoolean===true) {
        changeButton.innerHTML= "Start counting now!" 
       stopTimer()
        buttonBoolean=false
    }
}
function updateTimer(){
    daysPTag.innerHTML= days + " Days"
    hoursPTag.innerHTML= hours + " Hours"
    minutesPTag.innerHTML= minutes + " Minutes"
    secondsPTag.innerHTML= seconds + " Seconds."
}

 function CountSeconds(){
    
    if (seconds<59) {
        seconds+=1 

    } else if (seconds===59) {
        if (minutes===59) {
            if (hours===23) {
                seconds=0
                minutes=0
                hours=0
                days+=1 
            }
            else{
            seconds=0
            minutes=0
            hours+=1
            }
        }
       else {seconds=0
            minutes+=1}
        
    }
    
    
    updateTimer()
   
 }

function stopTimer(){
    clearInterval(secondsTimer)
    captureInterval()
    days=0
    hours=0
    minutes=0
    seconds=0
    updateTimer()
}
function captureInterval(){
let newInterval= document.createElement("p")
newInterval.innerHTML= `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
pastIntervals.appendChild(newInterval)
}
function showRigTimer(){
     if (showRigForm=== false) {
        inputForm.classList.remove("hidden")
        showRigForm=true
    } 
    else if (showRigForm=== true) {
        inputForm.classList.add("hidden")
        showRigForm=false
    } 
       
  
}
function compareArrays(){
    fixInput=false
    captureInterval()
    days=0
    hours=0
    minutes=0
    seconds=0
    updateTimer()
    insertRandomInput()
}

let myArray= [0,1,2,3]
let fixInput= false
function insertRandomInput() {
        for (let i = myArray.length; i > -10; i--) {
            let randomNumber= Math.floor(Math.random() * 4)
            let inputsIGot= parseInt( (document.getElementById(randomNumber)).value)
            console.log(inputsIGot)
            if (typeof(inputsIGot)==NaN || inputsIGot>23|| fixInput==true) {
                alert("OOPS, thats not a number between 1 and 23")
                fixInput=true
                days=0
                hours=0
                minutes=0
                seconds=0
                break
            } 
            
            else{
                console.log("I was heeeere")
                if (myArray.includes(randomNumber)){
                    if (days==0) {
                    days= (inputsIGot)
                    } else if (hours==0) {
                        hours= (inputsIGot)
                    } else if (minutes==0) {
                        minutes= (inputsIGot)
                    } else if (seconds==0) {
                        seconds= (inputsIGot)
                    }
                    let indeks= myArray.indexOf(randomNumber)
                    if (indeks>-1) {
                        myArray.splice(indeks,1)
                    } console.log(myArray)
                    console.log("days"+typeof(days) + days)
                    console.log("hours"+hours)
                    console.log("minutes"+minutes)
                    console.log("seconds"+seconds)
                    console.log("days again"+days)
                 
                }
               
            }
           
            }
            myArray= [0,1,2,3]
           updateTimer()
        }
        
  
    