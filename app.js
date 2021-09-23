const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const nextBtn = document.querySelector("#next-btn")
const checkBtn = document.querySelector("#check-btn")
const errorMsg= document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".number-of-notes")
const availNotes=[2000,500,100,50,20,10,5,1]

//to prevent negative value 
billAmount.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}
// to prevent negative value
cashGiven.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}


nextBtn.addEventListener("click",function show()
{   if(billAmount.value==""){
    errorMsg.textContent= "Enter the value"
}
    else{
    document.querySelector('.showlabel').style.display= 'block';
    document.querySelector('.showinp').style.display= 'block';
    document.querySelector('.showbtn').style.display= 'block';}
})




checkBtn.addEventListener("click",function validate(){
    hideMessage();
    var billAm = Number(billAmount.value)
    var cashGi = Number(cashGiven.value)
   if(billAm>0){
       if(cashGi >=billAm){
        const amountToBeReturned =cashGi-billAm
           calculateChange(amountToBeReturned)
           }
       else{
           showError("Do you wanna wash plates?")
       }

   }
   else{
       showError("Invalid bill amount")
   }
})

function hideMessage(){
    errorMsg.style.display ="none"
}

function showError(message){
    errorMsg.style.display="block";
    errorMsg.textContent=message
}

function calculateChange(amountToBeReturned){
    for(let i = 0; i<availNotes.length ; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availNotes[i]
            );
            amountToBeReturned = amountToBeReturned % availNotes[i]
            noOfNotes[i].innerText= numberOfNotes
    }
     
}