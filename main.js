function setup(){
    c1=createCanvas(280,280)
    c1.center()
    background("white")
    c1.mouseReleased(IdentifyDr)
    bolo=window.speechSynthesis
    mymodel=ml5.imageClassifier('DoodleNet')
}
function IdentifyDr(){
    mymodel.classify(c1,gotResult)
}
function draw(){
    stroke(0)
    strokeWeight(13)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }    
}
function clearcanvas(){
    background("white")
}
function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("sketchname").innerHTML='U just drew a '+results[0].label
        x=Math.round(results[0].confidence*100)
        document.getElementById("acc").innerHTML="I am "+x+" % sure"
        bolona=new SpeechSynthesisUtterance(results[0].label)
        bolo.speak(bolona)
    }
}



