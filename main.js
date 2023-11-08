function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position()
    canvas.center();

    video = createCapture(VIDEO);
    

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

