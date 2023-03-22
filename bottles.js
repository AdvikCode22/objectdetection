img1 = ""
status = ""

function setup(){
    canvas1 = createCanvas(750,500)
    canvas1.center()
    background("white")
    model = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status1").innerHTML = "Status: Detecting Objects"
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
    }
}

function preload(){
    img1 = loadImage("https://i.postimg.cc/FKV4qmCJ/trek-bottle-25-oz-hq.webp")
}

function draw(){
    image(img1,0,0,750,500)
}