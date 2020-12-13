var para = document.querySelector("#para");
var dropdown = document.querySelector("#dropdown");
var title = document.querySelector("#challengeName");
var input = document.querySelector("#challengeInput"); 
var modal = document.querySelector("#modal");
var options = Array.from(document.querySelectorAll("option")).map(function(o){ return o.value});
var count = 0;
var tokens;
var startTime;
var endTime;

document.querySelector(".close").addEventListener("click", function(){
    window.location.reload();
});

function insertPara(name, value){
    para.innerHTML = '';
    title.innerHTML = name;
    var fragment = document.createDocumentFragment();
    for(var i = 0; i < value.length - 1; ++i){
        var span = document.createElement("span");
        span.innerHTML = value[i];
        fragment.appendChild(span);
      }
    para.appendChild(fragment);
    tokens = document.querySelectorAll("#para > span");
}

var xhr = new XMLHttpRequest();
xhr.open("POST", "./Database/getChallenges.php", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();
xhr.onload = function() {
    console.log(xhr.responseText);
    obj = JSON.parse(xhr.responseText);
    dropdown.selectedIndex = Math.floor(Math.random() * options.length);
    insertPara(dropdown.value, obj[dropdown.value]);
}

dropdown.addEventListener("change", function() {
    insertPara(dropdown.value, obj[dropdown.value]);
});

input.addEventListener("focus", toggler);
input.addEventListener("blur", clearInput);

function clearInput(){
    input.value = '';
    tokens[count].classList.remove("current");
    input.removeEventListener("keydown", checker);
    count = 0;
    clear("wrong");
    clear("right");
}

function clear(className){
    var wrongs = document.querySelectorAll("." + className);
    for(var i = 0; i < wrongs.length; ++i){
      wrongs[i].classList.remove(className);
    }
}

function toggler(){
    input.addEventListener("keydown", checker);
    tokens[count].classList.add("current");
    startTime = new Date;
}

function checker(e){
    console.log(e.key);
    tokens[count].classList.remove("current");
    if(e.key == "Backspace"){
        count = --count > 0 ? count : 0;
        tokens[count].classList.remove("wrong");
        tokens[count].classList.remove("right");
        tokens[count].classList.add("current");
        return;
    }
    if(!(/^[A-Za-z0-9"\.\'\:\-\,\s]$/.test(e.key)) || e.ctrlKey){
        e.preventDefault();
        return;
    }
    if(tokens[count].innerHTML != e.key){
        tokens[count].classList.add("wrong");
    }
    else
        tokens[count].classList.add("right");
    ++count;
    tokens[count].classList.add("current");
    if(count == tokens.length){
        endTime = new Date;
        var minutes = (endTime - startTime)/60000;
        var wpm = (tokens.length/(5*minutes)).toFixed(2);
        var seconds = (minutes.toFixed(2) + "").split(".")[1];
        minutes = (minutes + "").split(".")[0];
        var errors = document.querySelectorAll(".wrong").length;
        console.log("wpm " + wpm + " minutes "+ minutes +" seconds " + seconds + " errors " + errors);
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = seconds;
        document.querySelector("#wpm .modalValue").innerHTML = wpm;
        document.querySelector("#errors .modalValue").innerHTML = errors;
        modal.style.display = "flex";
        document.querySelector(".modalBlur").style.display = "inline";
    }
}