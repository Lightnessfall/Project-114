function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(720,200);

    video = createCapture(VIDEO);
    video.size(600,500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
    
}
function modelLoaded(){
    console.log("Model is loaded")
}

function draw(){
    image(video, 0,0,600,500);
}
function Screenshot(){
    save("filter.png");
}