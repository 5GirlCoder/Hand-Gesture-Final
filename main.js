 
var prediction_1 = "";
var prediction_2 = "";

Webcam.set({
    width:350, 
    height:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        speak2()
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version :', ml5.version);
classifier =  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2UkosNvII/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
} 

function speak2()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "Image captured";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function checkPrediction()
{
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Namaste")
        {
            document.getElementById("update_emoji").innerHTML = "&#x1F64F;";
        }
        if(results[0].label == "Thumb's Up")
        {
            document.getElementById("update_emoji").innerHTML = " &#128077;";
        }
        if(results[0].label == "Thumb's down")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        if(results[0].label == "Awsome")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "Metal")
        {
            document.getElementById("update_emoji").innerHTML = "&#129304;";
        }
        if(results[0].label == "Halt")
        {
            document.getElementById("update_emoji").innerHTML = "&#9995;";
        }
        if(results[0].label == "Victory")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "Fist")
        {
            document.getElementById("update_emoji").innerHTML = "&#9994;";
        }



        if(results[1].label == "Namaste")
        {
            document.getElementById("update_emoji2").innerHTML = "&#x1F64F;";
        }
        if(results[1].label == "Thumb's Up")
        {
            document.getElementById("update_emoji2").innerHTML = " &#128077;";
        }
        if(results[1].label == "Thumb's down")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }
        if(results[1].label == "Awsome")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }
        if(results[1].label == "Metal")
        {
            document.getElementById("update_emoji2").innerHTML = "&#129304;";
        }
        if(results[1].label == "Halt")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9995;";
        }
        if(results[1].label == "Victory")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }
        if(results[1].label == "Fist")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9994;";
        }
    }
}
