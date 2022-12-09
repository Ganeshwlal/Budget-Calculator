
let sum=0;
let groce=0;
let electric=0;
let petrol=0;
let exp1=0;
let balance=0;
let sum2=0
let balance1=0
let petrol1=0
 let balance2=0
let electric1=0
let income3=0
let annual1=0
let annual2=0
let annual3=0
let income4=0
let income5=0
let balance3=0
let balance4=0
let balance5=0
let balance6=0

// MONTHLY INCOME

var income
function salary() {
    income = document.getElementById('month').value;
    income = parseInt(income);
    if(income<0){
        alert('value cannot be empty or negative')
    }else{
    document.getElementById('total').innerHTML= income
    annual1 = income*12
    document.getElementById('total2').innerHTML= annual1
    balance3 = income
    document.getElementById('savings').innerHTML=balance3
    }

    // console.log(income);
}

var income1
function salary1() {
     income1 = document.getElementById('stock').value;
     income1 = parseInt(income1);
     income4 = income + income1

     if(income1<0){
        alert('value cannot be empty or negative')
    }else{
     document.getElementById('total').innerHTML= income4
     annual2 = income4*12
     document.getElementById('total2').innerHTML= annual2

     balance4 = income4
     document.getElementById('savings').innerHTML=balance4
    }

    //  console.log(income1);
 }

 var income2
 function salary2() {
     income2 = document.getElementById('interest').value;
    income = parseInt(income);
    income1 = parseInt(income1);
    income2 = parseInt(income2)
    income5 = income + income1 + income2 

    if(income2<0){
        alert('value cannot be empty or negative')
    }else{
    document.getElementById('total').innerHTML= income5

     annual3 = income5*12
     document.getElementById('total2').innerHTML= annual3
     
     balance5 = income5
     document.getElementById('savings').innerHTML=balance5
    //  console.log(income2);
    }
 }



// MONTHLY INCOME ADD BUTTON
function add(){
    income = parseInt(income);
    income1 = parseInt(income1);
    income2 = parseInt(income2)
    // console.log(typeof(income));
    sum = income + income1 + income2 

    if(income && income1 && income2 <0){
        alert('value cannot be empty or negative')
    }
    else{
    document.getElementById('total').innerHTML= sum
    balance=sum;
    document.getElementById('savings').innerHTML=balance
    sum2=sum*12
    document.getElementById('total2').innerHTML=sum2
    }   
}



///slide or expence
function debit(amt){
    document.getElementById('groce').value=amt;
}

function debit1(amt){
    document.getElementById('petrol').value=amt;
}

function debit2(amt){
    document.getElementById('electric').value=amt;
}

// function debit3(amt){
//     document.getElementById('medical').value=amt;
// }

// function debit4(amt){
//     document.getElementById('other').value=amt;
// }


///MONTHLY EXPENSE
function out1(){
    groce=document.getElementById('groce').value;
    groce=parseInt(groce)

    if(groce<0){
        alert('value cannot be empty or negative')
    }
    else{
    document.getElementById('total-exp').innerHTML=groce
    // balance1=balance3 - groce
    balance1= balance5 - groce
    document.getElementById('savings').innerHTML = balance1
    // console.log(groce);
}
}

function out2(){
    petrol=document.getElementById('petrol').value;

    petrol=parseInt(petrol)
    petrol1 = groce + petrol

    if(petrol<0){
        alert('value cannot be empty or negative')
    }
    else{
    document.getElementById('total-exp').innerHTML=petrol1

    balance2 = balance1 - petrol
    document.getElementById('savings').innerHTML = balance2
    // console.log(petrol);
}
}

function out3(){
    electric=document.getElementById('electric').value;

    electric=parseInt(electric)
    electric1 = groce + petrol + electric;

    if(electric<0){
        alert('value cannot be empty or negative')
    }
    else{
    document.getElementById('total-exp').innerHTML=electric1
    balance6 = balance2 - electric
    document.getElementById('savings').innerHTML = balance6
}
}

//Expense button

// function expense(){
//     groce=parseInt(groce)
//     petrol=parseInt(petrol)
//     electric=parseInt(electric)
//   exp1= groce + petrol + electric;
// //   console.log(exp1);
//         // alert('add your income first')
    
//         balance=parseInt(balance)
//         balance= sum - exp1 
//         // if(balance<0){
         
//             document.getElementById('total-exp').innerHTML=exp1
//             document.getElementById('savings').innerHTML=` ${balance}`
//             // alert('Your Balance is too Low ')
//         // }
//         // else{
//             // document.getElementById('total-exp').innerHTML=exp1
//             // document.getElementById('savings').innerHTML=` ${balance}`
      
        
//         // }
      
// }





