const dob=document.querySelector("#DOB");
const LuckyNo=document.querySelector("#LuckyNumber");
const btnCheck=document.querySelector("#check");
const output=document.querySelector("#conclusion");

btnCheck.addEventListener('click', function(){
output.innerText=numIsLucky();
})

function birthDateSum(){
    let birth=dob.value;
   birth= birth.replaceAll("-","");
    
    let sum=0;
    for(let i=0;i<birth.length;i++){
        sum+=Number(birth[i]);
    }
    return sum; 
}

function numIsLucky(){
    const sum=birthDateSum();
    if(sum%LuckyNo.value==0){
        return("you are lucky");
    }
    if(LuckyNo.value==0 && LuckyNo.value==""){
        return("please provide your lucky number");
    }

    else{
        return("Your number is not that much LUCKY");
    }
    
}