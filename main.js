function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background("goldenrod");
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
}

function gotPoses(results) {
    if(results.lenght > 0){
        console.log(results);
    }
}