var numberofloops=document.querySelectorAll("button").length;
for(var i=0; i<numberofloops; i++){
document.querySelectorAll("button")[i].addEventListener("click", function handel(){
   var buttomBishalHTML=this.innerHTML;
   
   switch(buttomBishalHTML){
       case"a":
       
        alert("hey bishal")
      
       break;

       case"j":
        alert("hey saniya")
       
       break;

       case"k":
       alert("hey nabin")
       break;

       case"l":
       alert("hey rohit")
       break;

       case"s":
       alert("hey sashit")
       break;

       case"d":
       alert("hey nishal")
       break;

   }
})}