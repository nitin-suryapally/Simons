// start the game with any key press


 $(document).keypress(function(event){
        var num = random();
        rand_color(num);

})


//audio for color

function music_color(color_num){
    switch(color_num){
        case 1:
            var green = new Audio("sounds/blue.mp3");
            green.play();
            break;
        case 1:
            var green = new Audio("sounds/blue.mp3");
            green.play();
            break;
        case 1:
            var green = new Audio("sounds/blue.mp3");
            green.play();
            break;
        case 1:
            var green = new Audio("sounds/blue.mp3");
            green.play();
            break;
    }
}

// random generator

function random() {
    var num = Math.floor(Math.random() * 4) + 1;
    console.log(num)
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


   


play();


// rand_color(number);
// console.log(rand_color(number));
