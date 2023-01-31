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
       
    
//    let number= prompt("hmm, interesting! give me a random number that I can do some magic with")
//    numberPTag.innerHTML+=` you chose: ${number + " "}`
}
const myArray= [0,1,2,3]
// function rigTimer(){
//     if (buttonBoolean===true) {
//         clearInterval(secondsTimer)
//     }
//     if (!myArray.length) {
//         for (let i = 0; i < 4; i++) {
//             myArray.push(i)
//         } 
//     }
//    windowIsOpened= true
//    distributeRandomInputs()
// }
// const numberRemover=  myArray.filter(abc)

// function distributeRandomInputs(){
//     if (windowIsOpened) {
//         // for (let i = myArray.length; i > -2; i--) {
//         //      randomNumber= Math.floor(Math.random() * 4)
            
//         //     // let firstnumPlace= document.getElementById(randomNumber)
//         //     // let firstnum = firstnumPlace.value
//         //     if (myArray.includes(randomNumber)) {
//         //         return remaining!= randomNumber
//         //         myArray =numberRemover
//         //         console.log(myArray)
//         //         console.log(myArray)
//         //         console.log(myArray.indexOf(randomNumber))
//         //         console.log(randomNumber)
//         //     }
//         // }
//        abc()
        
    // let firstnumIndex= myArray.indexOf(firstnumPlace)
    // console.log(firstnum)
    // console.log(firstnumIndex)
    // console.log(firstnumPlace)
//     }
    
// }

// function removeNumber(remaining){
//     return remaining!= randomNumber
//     myArray =numberRemover
//     console.log(myArray)


// }
function abc(age){
    let randomNumber= Math.floor(Math.random() * 4)
        for (let i = myArray.length; i > -2; i--) {
            // let randomNumber= Math.floor(Math.random() * 4)
            // let firstnumPlace= document.getElementById(randomNumber)
            // let firstnum = firstnumPlace.value
            if (myArray.includes(randomNumber)) {
                console.log(numberRemover)
                return age!= randomNumber
                // console.log(myArray)
                // console.log(myArray.indexOf(randomNumber))
                // console.log(randomNumber)
                
            }
            
        }
        
    }
    function compareArrays(){
        const numberRemover=  myArray.filter(abc)
        
        for (let i = numberRemover.length; i > -50; i--) {

            console.log(numberRemover)
            
        }
        
    }
    