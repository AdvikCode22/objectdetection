img1 = ""
status = ""
objects = []

function preload(){
    img1 = loadImage("https://i.postimg.cc/1XMJF7zT/cute-wildlife-wallpaper-1.jpg")
}

function draw(){
    image(img1,0,0,750,500)

    if(status != ""){
        for(i = 0 ; i < objects.length ; i++){
            document.getElementById("status2").innerHTML = "Status: Objects Detected"

            fill("purple")
            percentage = Math.floor(objects[i].confidence * 100)
            textSize(25)
            text(objects[i].label + " " + percentage + "%",objects[i].x + 15,objects[i].y + 25)
            noFill()
            stroke("purple")
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height)
            document.getElementById("objcount").innerHTML = "There are 4 main objects and CocoSSD identified " + objects.length
        }
    }
}

function setup(){
    canvas1 = createCanvas(750,500)
    canvas1.center()
    background("white")
    model = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status2").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("Model Has been loaded!")
    status = true
    model.detect(img1,gotResults)
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)

        objects = results
    }
}