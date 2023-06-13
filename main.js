var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
var movement="";
var color= "black";
var line= 5;
var radius= 10;
var endpointx;
var endpointy;

canvas.addEventListener("mousedown", mousedown);
function mousedown(){
    movement="mousedown";
    color=document.getElementById("inputcolor").value;
    line=document.getElementById("inputsize").value;
    radius=document.getElementById("inputradius").value;
}
canvas.addEventListener("mouseup", mouseup);
function mouseup(){
    movement="mouseup";
}
canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(){
    movement="mouseleave";
}
canvas.addEventListener("mousemove", mousemove);
function mousemove(event){
    var startpointx = event.clientX - canvas.offsetLeft;
    var startpointy = event.clientY - canvas.offsetTop;
    if(movement=="mousedown"){
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = line;
        context.arc(startpointx,startpointy,radius,0,360);
        context.stroke();
    }
}
function clean(){
    context.clearRect(0,0,canvas.width,canvas.height);
}