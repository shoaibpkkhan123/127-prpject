song="";
function preload()
{
    song = loadSound("Lovely (1).mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
}