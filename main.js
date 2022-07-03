nosex=0
nosey=0
function preload(){
img=loadImage("https://i.postimg.cc/xCkjxFFW/kindpng-1705968.png")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center();
    video=createCapture(VIDEO)
    video.size(500,500)
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotposes)
}

function modelLoaded(){
console.log("modelLoaded")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
        
    }
}

    function  draw(){
        image(video,0,0,500,500)
image(img,nosex-100,nosey-200,200,150)
        
        
        }
        function save(){
            save("flowercrown.jpeg")
        } 