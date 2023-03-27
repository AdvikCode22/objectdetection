img = ""
status = ""
objects = []

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

        objects = results
    }
}

function preload(){
    img = loadImage("https://i.postimg.cc/zXGVF2Bj/9513b6126c98d23ca73229c664e9db11.jpg")
}

function draw(){
    image(img,0,0,750,500)

    if(status != ""){
        for(i = 0 ; i < objects.length ; i++){
            document.getElementById("status1").innerHTML = "Status: Objects Detected"

            fill("purple")
            percentage = Math.floor(objects[i].confidence * 100)
            textSize(25)
            text(objects[i].label + " " + percentage + "%",objects[i].x + 15,objects[i].y + 25)
            noFill()
            stroke("purple")
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height)
            document.getElementById("objcount").innerHTML = "There are 3 main objects and CocoSSD identified " + objects.length
        }
    }
}