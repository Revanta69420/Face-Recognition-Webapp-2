Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot() {
    webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src ="' + data_uri + '"/>';

    })
}
console.log('ml5 version:', ml5.verson);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f1WpL65CV/model.json', modelLoaded);

function modelLoaded() {
    console.log('modelLoaded!')
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    if (results[0].label == "Mother") {
    document.getElementById("family_member_name").innerHTML = "Mother"
    }
    if (results[0].label == "Father") {
       
    }
    if (results[0].label == "Son") {
      
    }
}