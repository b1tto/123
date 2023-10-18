function setup(){
canvas = createCanvas(500, 500);
video = createCapture(VIDEO);
video.size(500, 500);
posenet = ml5.poseNet(video, modelloaded);
posenet.on('pose', gotposes);
}
function modelloaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
}
}
function preload(){

}
function draw(){

}