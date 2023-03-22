img = ""
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
    model.detect(img,gotResults)
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
    img = loadImage("https://i.postimg.cc/zXGVF2Bj/9513b6126c98d23ca73229c664e9db11.jpg")
}

function draw(){
    image(img,0,0,750,500)
}