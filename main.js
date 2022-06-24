function startClassification(){
    navigator.mediaDevices.getUserMedia();
    classifier=ml5.soundClassifier("model.json",modelReady)
}
function modelReady(){
    classifier.classsify(gotResults());
}
function gotResults(error,results){
    console.log("got result")
    console.log(results)
}