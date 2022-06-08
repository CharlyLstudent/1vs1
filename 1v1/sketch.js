var x_player = 50;
var y_player = 600;
var x_missile = 50;
var y_missile = 550;

var x_player2 = 50;
var y_player2 = 100; 
var x_missile2 = 50;
var y_missile2 = 100;

var shooting = false;
var fire = false; 

var game_over = false;
var game_over2 = false;


function setup() {
    createCanvas(700,700);
}

function draw() {
    if(game_over == false && game_over2 == false){
    background(0);
    vaisseau();
    projectile();
    vaisseau2();
    colision();
    }
    else if (game_over == true){
        text('PLAYER BLUE WIN', 150,325);
        fill(0,150,255);
        textSize(50);
        stroke(0,250,255);
        strokeWeight(2);
    }
    else if (game_over2 == true){
        text('PLAYER RED WIN', 150,325);
        fill(200,0,0);
        textSize(50);
        stroke(250,0,0);
        strokeWeight(2);
    }
}

function vaisseau(){
    push();

    fill(200,0,0);
    stroke(255,0,0);
    strokeWeight(2);
    circle(x_player, y_player, 80);

    if (keyIsDown(81)){

        x_player=x_player-8;
    }

    if (keyIsDown(68)){
 
        x_player=x_player+8;
    }

    if(x_player> 700){
        x_player = 0;
    }

    if(x_player<0){
        x_player = 700;
    }

    pop();
}

function projectile(){
    push();

    fill(255,200,0);
    stroke(255,0,0);
    strokeWeight(2);
    circle(x_missile, y_missile, 20);
    

    if(keyIsDown(32)){
        shooting = true;
    }

    
    if(shooting == false){
        x_missile = x_player;
        y_missile = y_player - 50;
    }

    if(shooting == true){
        y_missile = y_missile - 10;
    }

    if(y_missile < 0){
        shooting = false;
    }

    pop();

}

function vaisseau2(){

    push();

    fill(0,150,255);
    stroke(0,250,255);
    strokeWeight(2);
    circle(x_player2, y_player2, 80);

    if (keyIsDown(LEFT_ARROW)){

        x_player2=x_player2 - 8;
    }

    if (keyIsDown(RIGHT_ARROW)){
 
        x_player2=x_player2 + 8;
    }

    if(x_player2> 700){
        x_player2 = 0;
    }

    if(x_player2<0){
        x_player2 = 700;
    }

    fill(255,0,250);
    stroke(255,0,150);
    strokeWeight(2);
    circle(x_missile2, y_missile2, 20);

    if(keyIsDown(96)){
        fire = true;
    }
    
    if(fire == false){
        x_missile2 = x_player2;
        y_missile2 = y_player2 + 50;
    }

    if(fire == true){
        y_missile2 = y_missile2 + 10;
    }

    if(y_missile2 > 700){
        fire = false;
    }

    pop();

}

function colision(){
    let d= dist(x_player,y_player,x_missile2,y_missile2);

    if (d<50){
        game_over = true;

    }

    let d2= dist(x_player2, y_player2,x_missile,y_missile);

    if (d2<50){
        game_over2 = true;
    }
}