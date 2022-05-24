
var lvl = 0;

// random generator

function random() {
    var num = Math.floor(Math.random() * 4) + 1;
    // console.log(num)
    return num;
}


var number = random();


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

//color to number
// function color_to_number(color) {
//     var number;
//     switch (color) {
//         case green:
//             number = 1;
//             break;
//         case red:
//             number = 2;
//             break;
//         case yellow:
//             number = 3;
//             break;
//         case blue:
//             number = 4;
//             break;
//     }

//     return color;
// }




//audio for color

function music_color(color_num) {
    switch (color_num) {
        case 1:
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case 2:
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case 3:
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case 4:
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
    }
}








// generating random color and corresponding sound

function generating_random_color(arr_color) {
    var num = random();
    var color = rand_color(num);

    music_color(num);
    $("." + color).addClass("animation");
    setTimeout(function () {
        $("." + color).removeClass("animation");
    }, 100);

    arr_color[lvl] = color;
    lvl++;

    return arr_color;
}



function user_response(arr_color) {
    var user_color_arr = [];
    $("button").click(function (event) {
        console.log(event);
        var btn_color = event.currentTarget.id;
        console.log(btn_color);
        var a = 0;
        user_color_arr[a] = btn_color;
    })

}


// start the game with any key press

function start(lvl) {
    $(document).keypress(function () {
        var num = random();
        var color = rand_color(num);

        music_color(num);
        $("." + color).addClass("animation");
        setTimeout(function () {
            $("." + color).removeClass("animation");
        }, 100);

        $("h1").text("Level-1");

        var arr_color = [];
        arr_color[0] = color;
        user_response(arr_color);
        return arr_color;
    })

    lvl = 1;


};


start();









// rand_color(number);
// console.log(rand_color(number));
