
// audio and specific color

var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var blue = new Audio("sounds/blue.mp3");
var gen_color = [];
var user_color_arr = [];



//random number generator

function random() {
    var num = Math.floor(Math.random() * 4) + 1;
    // console.log(num)
    return num;
};


//  to allocate color for each number
function rand_color(number) {
    var color;
    switch (number) {
        case 1:
            color = "green";
            break;
        case 2:
            color = "red";
            break;
        case 3:
            color = "yellow";
            break;
        case 4:
            color = "blue";
            break;
    }

    return color;
}

// random color 

function music_color(color_num) {
    switch (color_num) {
        case 1:
            green.play();
            break;
        case 2:
            red.play();
            break;
        case 3:
            yellow.play();
            break;
        case 4:
            blue.play();
            break;
    }
}

//  sound on key press

function start() {
    $(document).keypress(function () {
        var num = random();
        var color = rand_color(num);

        music_color(num);
        $("." + color).addClass("animation");
        setTimeout(function () {
            $("." + color).removeClass("animation");
        }, 100);
        gen_color.push(color);
        console.log(gen_color);
        user_response();
        return gen_color;
    })
}

// clicked color 

function user_response() {

    $("button").click(function (event) {
        var btn_color = event.currentTarget.id;
        var num;
        for (var i = 0; i < 4; i++) {
            if (btn_color === "green") {
                num = 1;
            }
            else if (btn_color === "red") {
                num = 2;
            }
            else if (btn_color === "yellow") {
                num = 3;
            }
            else if (btn_color === "blue") {
                num = 4;
            }
        }

        music_color(num);
        $("." + btn_color).addClass("animation");
        setTimeout(function () {
            $("." + btn_color).removeClass("animation");
        }, 100);

        user_color_arr.push(btn_color);
        var len = gen_color.length;
        for (var i = 0; i < len; i++) {
            if (gen_color[i] === user_color_arr[i]) {
                $("h1").text("Level-1");
            }
            else {
                $("h1").text("game over");
                return;
            }
        }
        console.log(user_color_arr);

    });
}

// checking the color pattern

start();





