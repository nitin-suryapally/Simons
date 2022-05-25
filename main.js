


// defining variables

var button = ["green", "red", "yellow", "blue"];
var colorpatter = [];
var userclickpatter = [];
var started = false;
var lvl = 0;


// key clicks detection 

$(document).keypress(function () {
    if (!started) {
        $("#level-indicator").text("level-" + lvl);
        sequence();
        started = true;

    }
})

// play sequence 

function sequence() {
    lvl++;
    userclickpatter = [];

    $("#level-indicator").text("level-" + lvl);
    var randomnumber = Math.floor(Math.random() * 4);
    var randomcolor = button[randomnumber];
    colorpatter.push(randomcolor);
    playmusic(randomcolor);
    $("#" + randomcolor).addClass("animation");
    setTimeout(function () {
        $("#" + randomcolor).removeClass("animation")
    }, 100);
    console.log(colorpatter);
}

// play audio 

function playmusic(randomcolor) {
    var audio = new Audio("sounds/" + randomcolor + ".mp3");
    audio.play();
}

// clicks by the user are managed here 


$("button").click(function (event) {
    var buttonclicked = event.currentTarget.id;
    console.log(buttonclicked);
    playmusic(buttonclicked);
    $("#".buttonclicked).addClass("animation");
    userclickpatter.push(buttonclicked);
    checkpatter(userclickpatter.length -1);

    console.log(userclickpatter);
});


// the patter is checked here

function checkpatter(length) {
    if (colorpatter[length] === userclickpatter[length]) {
        if (colorpatter.length === userclickpatter.length) {
            setTimeout(function () {
                sequence()
            }, 1000);
        }
    }
    else {
        var sound = "wrong";
        playmusic(sound);
        $("#level-indicator").text("wrong , press a key to restart the game");
        startover();
    }
}
// restart the game 

function startover() {
    started = false;
    lvl = 0;
    colorpatter = [];
}