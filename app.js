var colors=["pink","red","green","yellow","brown","aqua","blue","purple","orange","black","voilet","darkblue","indigo"];
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    let randomnumber=getRandomnumber();
    document.body.style.backgroundColor=colors[randomnumber];
})
function getRandomnumber(){
    return Math.floor(Math.random()* colors.length);
}