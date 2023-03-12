// console.log("Script is working from a different file!!");

// var username=prompt("Enter your username..");
// alert("This script works "+username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
  return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server! Please try again after sometime!!");
}

function clickHandler() {
    // outputDiv.innerText = "Hello World!!"
    inputText = txtInput.value; 
    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
     })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)