let pink=document.getElementById("pink");
let boody=document.getElementById("particles-js");
let naval=document.getElementById("naval");
let litered=document.getElementById("litered");
let navbar=document.getElementById("navbar");
let rigthside=document.getElementById("rightside");
let leftsidee=document.getElementById("leftside");
let aboutme=document.getElementById("aboutmetext");
let moreaboutmebutton=document.getElementById("moreaboutme_button");
let hovermain=document.getElementById("main");
let maiin=document.getElementById("maiin");
let submitbtn=document.getElementById("FORMSUBMIT")
let fullname=document.getElementById("f-fullname");


pink.addEventListener("click",ball)
function ball(){
boody.style.backgroundColor="#320632";
navbar.style.backgroundColor="#320632"
rigthside.style.backgroundColor="#320632"
leftsidee.style.backgroundColor="#320632";
aboutme.style.backgroundColor="#320632"
moreaboutmebutton.style.backgroundColor="#320632"
hovermain.style.backgroundColor="#320632"




}


naval.addEventListener("click",tall)
function tall(){
boody.style.backgroundColor="#011b39";
navbar.style.backgroundColor="#011b39"
rigthside.style.backgroundColor="#011b39"
leftsidee.style.backgroundColor="#011b39"
aboutme.style.backgroundColor="#011b39"
moreaboutmebutton.style.backgroundColor="#011b39"
hovermain.style.backgroundColor="#011b39"
}

litered.addEventListener("click",tell)
function tell(){
boody.style.backgroundColor="#9A0113";
navbar.style.backgroundColor="#9A0113"
rigthside.style.backgroundColor="#9A0113"
leftsidee.style.backgroundColor="#9A0113"
aboutme.style.backgroundColor="#9A0113"
moreaboutmebutton.style.backgroundColor="#9A0113";
hovermain.style.backgroundColor="#9A0113";



}

submitbtn.addEventListener("click",(e)=>{
e.preventDefault();
submitbtn.style.backgroundColor="rgba(255, 146, 0, 0.936)"
})



