// left_hand_coordinate - function that calculate the position of the left hand using parametr (time)
function left_hand_coordinate(time) {

    // coordinates it is the arrays of the top and left positions (1st element - top, 2nd - left positions)
    let coordinates = [0, 0];

    if (time < 50) {
        coordinates[0] = -2 / 25 * ((time - 25) ** 2) + 250;
        coordinates[1] = time;
    }

    else {
        coordinates[0] = 1 / 62.5 * ((time - 75) ** 2) + 190;
        coordinates[1] = 100 - time;
    }

    coordinates[0] += "px";
    coordinates[1] += "px";

    // as a result the arrays is returned
    return coordinates;
}

// right_hand_coordinate - function that calculate the position of the right hand using parametr (time)
function right_hand_coordinate(time) {

    // coordinates it is the arrays of the top and left positions (1st element - top, 2nd - left positions)
    let coordinates = [0, 0];

    if (time < 50) {
        coordinates[0] = 1 / 62.5 * ((time - 25) ** 2) + 190;
        coordinates[1] = time + 200;
    }

    else {
        coordinates[0] = -2 / 25 * ((time - 75) ** 2) + 250;
        coordinates[1] = 300 - time;
    }

    coordinates[0] += "px";
    coordinates[1] += "px";

    // as a result the arrays is returned
    return coordinates;
}

// ball_coordinate - function that calculate the position of ball using parametr (time)
function ball_coordinate(time) {

    // coordinates it is the arrays of the top and left positions (1st element - top, 2nd - left positions)
    let coordinates = [0, 0];

    if (time < 50) {
        coordinates[0] = -2/25 * ((time - 25)**2) + 250; 
        coordinates[1] = time; 
    }

    else if (time < 250){
        coordinates[0] = 1/50 * ((time - 150)**2); 
        coordinates[1] = time; 
    }
    else if (time < 300) {
        coordinates[0] = -2/25 * ((time - 275)**2) + 250; 
        coordinates[1] = 500 - time; 
    }
    else {
        coordinates[0] = 1/50 * ((time - 400)**2); 
        coordinates[1] = 500 - time; 
    }

    // 8.5 added to make balls position more realistic 
    coordinates[0] = coordinates[0] + 8.5 + "px";
    coordinates[1] = coordinates[1] + 8.5 + "px";

    // as a result the arrays is returned
    return coordinates;
}

// Juggle5 function that uses to juggle with 5 items
function Juggle5() {

    // set items by id in the html
    const left_hand = document.getElementById("left_hand");
    const right_hand = document.getElementById("right_hand");

    const ball1 = document.getElementById("ball1");
    const ball2 = document.getElementById("ball2");
    const ball3 = document.getElementById("ball3");
    const ball4 = document.getElementById("ball4");
    const ball5 = document.getElementById("ball5");

    // create time variable
    let time = 400;

    // create necessary variables
    let left_hand_position, right_hand_position, ball1_coordinate, ball2_coordinate, ball3_coordinate, ball4_coordinate, ball5_coordinate;

    // setinterval command to use frame function every 3ms (milliseconds)
    setInterval(frame, 3);

    // frame function that calculate positions of the each element in each frame
    function frame() {

        // add frame
        time++;

        // time is looped between 400 and 900 
        // because no endpoint was added animation will be eternal
        if (time >= 900) time -= 500;

        // calculate positions for hands
        left_hand_position = left_hand_coordinate(time % 100);
        right_hand_position = right_hand_coordinate(time % 100);

        // use them
        left_hand.style.top = left_hand_position[0];
        left_hand.style.left = left_hand_position[1];

        right_hand.style.top = right_hand_position[0];
        right_hand.style.left = right_hand_position[1];

        // calculate balls positions
        ball1_coordinate = ball_coordinate(time % 500);
        ball2_coordinate = ball_coordinate((time - 100) % 500);
        ball3_coordinate = ball_coordinate((time - 200) % 500);
        ball4_coordinate = ball_coordinate((time - 300) % 500);
        ball5_coordinate = ball_coordinate((time - 400) % 500);

        // use them
        ball1.style.top = ball1_coordinate[0];
        ball1.style.left = ball1_coordinate[1];

        ball2.style.top = ball2_coordinate[0];
        ball2.style.left = ball2_coordinate[1];

        ball3.style.top = ball3_coordinate[0];
        ball3.style.left = ball3_coordinate[1];

        ball4.style.top = ball4_coordinate[0];
        ball4.style.left = ball4_coordinate[1];

        ball5.style.top = ball5_coordinate[0];
        ball5.style.left = ball5_coordinate[1];
    }
}

// set default positions for hands and ball when it is 1 ball juggling
function defaultpos1() {
    const left_hand = document.getElementById("left_hand");
    const right_hand = document.getElementById("right_hand"); 

    const ball = document.getElementById("ball1"); 

    left_hand.style.top = "200px";
    left_hand.style.left = "0px";

    right_hand.style.top = "200px";
    right_hand.style.left = "250px";

    ball.style.top = "208.5px";
    ball.style.left = "8.5px";
}

// set default positions for hands and balls for 2 and 3 ball juggling
function defaultpos2_3() {
    const left_hand = document.getElementById("left_hand");
    const right_hand = document.getElementById("right_hand");
    const left_hand2 = document.getElementById("left_hand2");
    const right_hand2 = document.getElementById("right_hand2");

    const ball1 = document.getElementById("ball1");   
    const ball2 = document.getElementById("ball2");   
    const ball3 = document.getElementById("ball3");   
    const ball4 = document.getElementById("ball4");   
    const ball5 = document.getElementById("ball5");

    left_hand.style.top = "200px";
    left_hand.style.left = "0px";

    right_hand.style.top = "200px";
    right_hand.style.left = "250px";

    left_hand2.style.top = "200px";
    left_hand2.style.left = "0px";

    right_hand2.style.top = "200px";
    right_hand2.style.left = "250px";

    ball1.style.top = "208.5px";
    ball1.style.left = "8.5px";

    ball2.style.top = "208.5px";
    ball2.style.left = "258.5px";

    ball3.style.top = "208.5px";
    ball3.style.left = "8.5px";

    ball4.style.top = "208.5px";
    ball4.style.left = "258.5px";

    ball5.style.top = "200px";
    ball5.style.left = "0px";
}

// create a global variable "button_free" to check if button is ready to be clicked or not
let button_free = true;

// juggle 1 ball start with left hand
function Juggle1l() {
    
    // check if button is clickable
    if (button_free) {

        // make button unclickable
        button_free = false;   
        let starttime = 0;
        Juggle1(starttime);
    }
}

// juggle 1 ball start with right hand
function Juggle1r() {

    // check if button is clickable
    if (button_free) {

        // make button unclickable
        button_free = false;   
        let starttime = 250;
        Juggle1(starttime);
    }
}

// juggle 1 ball function
function Juggle1(starttime) {
    
    // create main variable to have a chance to stop the process (because now it must not be eternal)
    let process;

    // set items by id in the html 
    const left_hand = document.getElementById("left_hand");
    const right_hand = document.getElementById("right_hand"); 

    const ball1 = document.getElementById("ball1");

    // set start and stop time
    let stoptime = starttime + 250;
    let time = starttime;

    // create necessary variables
    let left_hand_position, right_hand_position, ball1_coordinate;

    // clear the frame 
    clearInterval(process);

    // set the interval between frames equal to 5ms
    process = setInterval(frame, 5);

    function frame() {
        time++; 

        // when time reach stoptime stop the animation and make buttons clickable
        if (time >= stoptime) {
            clearInterval(process);
            button_free = true;    
        }

        // set left hand position
        if (time < 100)
            left_hand_position = left_hand_coordinate(time % 100);

        else
            left_hand_position = ["200px", "0px"];

        // set right hand position
        if (time > 250 && time < 350)
            right_hand_position = right_hand_coordinate(time % 100);

        else
            right_hand_position = ["200px", "250px"];

        left_hand.style.top = left_hand_position[0];
        left_hand.style.left = left_hand_position[1];

        right_hand.style.top = right_hand_position[0];
        right_hand.style.left = right_hand_position[1];

        // set the ball position
        ball1_coordinate = ball_coordinate(time);

        ball1.style.top = ball1_coordinate[0];
        ball1.style.left = ball1_coordinate[1];
    }
}

// juggle 2 balls, starting with left hand
function Juggle2l() {
    if (button_free) {
        button_free = false;   
        let starttime = 0;
        Juggle2(starttime);
    }
}

// juggle 2 balls, starting with right hand
function Juggle2r() {
    if (button_free) {
        button_free = false;   
        let starttime = 350;
        Juggle2(starttime);
    }
}

// juggle 2 balls function
function Juggle2(starttime) {
    
    // create main variable process to stop animation when needed
    let process;

    // set items by id in html
    const left_hand = document.getElementById("left_hand");
    const right_hand = document.getElementById("right_hand"); 

    const ball1 = document.getElementById("ball1");   
    const ball2 = document.getElementById("ball2");   

    // set start and stop time
    let stoptime = starttime + 350;
    let time = starttime;

    // create necessary variables
    let left_hand_position, right_hand_position, ball1_coordinate, ball2_coordinate;

    // clear the frame 
    clearInterval(process);

    // set the interval between frames equal to 5ms
    process = setInterval(frame, 5);

    function frame() {

        time++;

        // when time reach stoptime stop the animation
        if (time >= stoptime) {
            clearInterval(process);
            button_free = true;
        }

        // set left hand position
        if (time < 100) 
            left_hand_position = left_hand_coordinate(time % 100);

        else if (time > 450 && time < 550) 
            left_hand_position = left_hand_coordinate((time - 50) % 100);

        else 
            left_hand_position =  ["200px", "0px"];

        // set right hand position
        if (time > 100 && time < 200) 
            right_hand_position = right_hand_coordinate((time - 50) % 100);

        else if (time > 350 && time < 450)
            right_hand_position = right_hand_coordinate(time % 100);
        
        else 
            right_hand_position = ["200px", "250px"];

        left_hand.style.top = left_hand_position[0];
        left_hand.style.left = left_hand_position[1];

        right_hand.style.top = right_hand_position[0];
        right_hand.style.left = right_hand_position[1];

        // set first ball position
        if (time < 250) 
            ball1_coordinate = ball_coordinate(time % 500);

        else if (time < 350) 
            ball1_coordinate = ["208.5px", "258.5px"];

        else if (time <= 600) 
            ball1_coordinate = ball_coordinate((time - 100) % 500);

        else 
            ball1_coordinate = ["208.5px", "8.5px"];

        // set second ball position
        if (time < 100) 
            ball2_coordinate = ["208.5px", "258.5px"];
            
        else if (time <= 350) 
            ball2_coordinate = ball_coordinate((time + 150) % 500);
        
        else if (time < 450)
            ball2_coordinate = ["208.5px", "8.5px"];

        else 
            ball2_coordinate = ball_coordinate((time + 50) % 500);

        ball1.style.top = ball1_coordinate[0];
        ball1.style.left = ball1_coordinate[1];

        ball2.style.top = ball2_coordinate[0];
        ball2.style.left = ball2_coordinate[1];
    }
}

// juggle 3 balls up to 10
function Juggle3normal() {
    if (button_free) {
        button_free = false;   
        Juggle3(3);
    }
}

// juggle 3 balls slowly
function Juggle3slowly() {
    if (button_free) {
        button_free = false;   
        Juggle3(10);
    }
}

// 3 ball juggling function, "step" parametr is how much ms (milliseconds) between frames 
function Juggle3(step) {
    
    // create main variable -- process
    let process;

    // set items by id
    const left_hand = document.getElementById("left_hand2");
    const right_hand = document.getElementById("right_hand2"); 

    const ball1 = document.getElementById("ball3");   
    const ball2 = document.getElementById("ball4");   
    const ball3 = document.getElementById("ball5");   

    // set start and stop time
    let stoptime = 998;
    let time = 0;

    // create necessary variables
    let left_hand_position, right_hand_position, ball1_coordinate, ball2_coordinate, ball3_coordinate;    

    // clear the frame
    clearInterval(process);

    // set the interval between frames equal to parametr in ms
    process = setInterval(frame, step);

    function frame() {

        time++;

        // when reach stoptime finish the animation
        if (time >= stoptime) {
            clearInterval(process);
            button_free = true;
        }

        // set left hand position
        if (time < 817 && time % 167 < 100) 
            left_hand_position = left_hand_coordinate(time % 167);
        
        else 
            left_hand_position = ["200px", "0px"];

        // set right hand position
        if (time < 877 && (time - 33) % 167 > 50 && (time - 33) % 167 < 150)
            right_hand_position = right_hand_coordinate(((time - 33) % 167) % 100);

        else 
            right_hand_position = ["200px", "250px"];

        left_hand.style.top = left_hand_position[0];
        left_hand.style.left = left_hand_position[1];

        right_hand.style.top = right_hand_position[0];
        right_hand.style.left = right_hand_position[1];

        // set the first ball position
        ball1_coordinate = ball_coordinate(time % 500);

        // set the second ball position
        if (time < 83)
            ball2_coordinate = ["208.5px", "258.5px"];

        else if (time < 833)
            ball2_coordinate = ball_coordinate((time + 167) % 500);
        
        else 
            ball2_coordinate = ["208.5px", "8.5px"];

        // set the third ball position
        if (time < 167)
            ball3_coordinate = left_hand_position;
        
        else if (time < 917)
            ball3_coordinate = ball_coordinate((time - 167) % 500);

        else 
            ball3_coordinate = ["208.5px", "258.5px"];

        ball1.style.top = ball1_coordinate[0];
        ball1.style.left = ball1_coordinate[1];

        ball2.style.top = ball2_coordinate[0];
        ball2.style.left = ball2_coordinate[1];

        ball3.style.top = ball3_coordinate[0];
        ball3.style.left = ball3_coordinate[1];
    }
}


// footer animation function
function footeranimation() {

    // find footer
    const footer = document.getElementsByTagName("footer")[0];
    
    // if animation can be started
    if (footer.style.animationName === "donothing" || footer.style.animationName === ""){

        // do it
        footer.style.animationName = "doanimation";

        // wait 3s (3 seconds) until finish
        setTimeout(footeranimationfinish, 2000);
    }

    // else use alert command
    else alert("Not so fast please...");
}

// footer animation finish function
function footeranimationfinish() {

    // find footer
    const footer = document.getElementsByTagName("footer")[0];
    
    // finish animation
    footer.style.animationName = "donothing";
}