
var radios = document.getElementsByName("offer");

radios.forEach(function(radio)
{

var btn = radio.id;
document.getElementById(btn).addEventListener("click", function(){

var boxcolor = "Box" + btn.slice(2);

if(boxcolor == "Box1"){
    document.getElementById("Box1").style.backgroundColor = "rgba(0, 127, 97, 5%)";
    document.getElementById("Box2").style.backgroundColor = "white";
    document.getElementById("Box3").style.backgroundColor = "white";

    document.getElementById("amount").innerHTML = "195.00";

}
if(boxcolor == "Box2"){
    document.getElementById("Box1").style.backgroundColor = "white";
    document.getElementById("Box2").style.backgroundColor = "rgba(0, 127, 97, 5%)";
    document.getElementById("Box3").style.backgroundColor = "white";

    document.getElementById("amount").innerHTML = "345.00";
}
if(boxcolor == "Box3"){
    document.getElementById("Box1").style.backgroundColor = "white";
    document.getElementById("Box2").style.backgroundColor = "white";
    document.getElementById("Box3").style.backgroundColor = "rgba(0, 127, 97, 5%)";

    document.getElementById("amount").innerHTML = "528.00";
}


})

})


