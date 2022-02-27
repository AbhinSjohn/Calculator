let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let eval = document.getElementById("evaluate");
let firstScreen = document.getElementById("first-screen");
let operatorScreen = document.getElementById("operator-screen");
let secondScreen = document.getElementById("second-screen");
let historyBtn = document.getElementById("hist");
let calculatorConatainer = document.getElementById("c-c");
let historyListContainer = document.getElementsByClassName("history-container");
let deleteListItem = document.getElementsByClassName("delete");
let listItem = document.getElementsByClassName("list-item");
let clear = document.getElementById("clear");
let c="";
let a="";
let b="";
let d="";
let count =0;
let histories="";
let evalue;
[...numbers].forEach((item)=>{
   item.addEventListener("click",(event)=>{
      if(count ==0){
      a += item.textContent;
      console.log(a);
      firstScreen.innerHTML = a;
      }
      if(count ==1){
         b+=item.textContent;
         console.log(b);
         secondScreen.innerHTML = b;
      
      }
   })
});

[...operators].forEach((item)=>{
 item.addEventListener("click",(event)=>{
 
      count+=1;
      
  
       
      if(count == 1){
      c = item.textContent;
      console.log(c);
      console.log(count);
      operatorScreen.innerHTML=c;
      }
      if(count == 2){
         operation();
         console.log(a);
         b="";
         secondScreen.innerHTML=""
         console.log(b);
         c=item.textContent;
         operatorScreen.innerHTML=c;
         console.log(c);
         console.log(count);
         
      }
      
   })
});


function operation(){
 
 
    if(c=="+"){
  
       a = parseFloat(a) + parseFloat(b);
       console.log(a);
       firstScreen.innerHTML = a;
       count = 1;
    }
    if(c=="-"){
      a = parseFloat(a) - parseFloat(b);
       
       console.log(a);
       firstScreen.innerHTML = a;
      count = 1;
   }
   if(c=="*"){
      a = parseFloat(a) * parseFloat(b);
     
       console.log(a);
       firstScreen.innerHTML = a;
      count = 1;
   }
   if(c=="/"){
      a = parseFloat(a) / parseFloat(b);
      
       console.log(a);
       firstScreen.innerHTML = a;
      count = 1;
   }
   if(c=="%"){
      a = parseFloat(a) % parseFloat(b);
      console.log(a);
      firstScreen.innerHTML = a;
      count = 1;
   }
 }

eval.addEventListener("click", (event)=>{
     d=a;
     operation();
     evalue=a;
     history();
     
   b="";
   c="";
   count = 0;
  
   firstScreen.innerHTML=a;
   a="";
  
   
   secondScreen.innerHTML=b;
   operatorScreen.innerHTML=c;
});

function history(){
  histories += `<li class="list-item"> ${d} ${c} ${b} = ${evalue} <input type="button" value="X" class="delete"></li><br>`
  console.log(histories);
}
historyBtn.addEventListener("click",(event)=>{
   let historyContainer = document.createElement("ul");
   historyContainer.id = "un-list";
   let backButton = document.createElement("div");
   backButton.id = "back-butn";
   backButton.innerHTML='<i class="bi bi-back"></i>';
   historyContainer.append(backButton);
   historyContainer.className = "history-container";
   calculatorConatainer.append(historyContainer);
   historyContainer.innerHTML += histories;
   back();
   clickOnDelete();
});

function clickOnDelete(){
[...deleteListItem].forEach((item)=>{
   item.addEventListener("click", (event)=>{
      item.parentElement.remove();
})
})
};
function back(){
document.getElementById("back-butn").addEventListener("click",(event)=>{
    document.getElementById("un-list").remove();
    
})};
clear.addEventListener("click",(event)=>{
       
   b="";
   c="";
   count = 0;
  
   firstScreen.innerHTML="";
   a="";
  
   
   secondScreen.innerHTML="";
   operatorScreen.innerHTML="";
})