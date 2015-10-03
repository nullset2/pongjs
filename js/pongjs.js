//some stuff to get started
var ball = {
  pos_x: 0,
  pos_y: 0,
  speed_x: 0,
  speed_y: 0,
  radius: 10
};

var upperPanel = {
  pos_x: 0,
  width: 100,
  height: 10
};

var lowerPanel = {
  pos_x: 0,
  width: 100,
  height: 10
};

var game = {
  score_p1: 0,
  score_p2: 0
};

var colors = {
  background_color: "#000000",
  primary_color: "#FFFFFF"
};

var mainSpeed = 6;
//getting the canvas and the context
var canvas = document.getElementById("pongjs_canvas"); //fetching the canvas from out html view to do stuff with it
var context = canvas.getContext("2d"); //get the 2d context to do stuff

var refreshRate = 1000/60;

function onLoad(){

  //this function draws a background for our canvas with a black background and a line in the middle with simple function calls
  function drawBackground(){
    context.fillStyle = colors.background_color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = colors.primary_color;

    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();
  }

  //this function draws a border around our canvas
  function drawBorder(){

    context.strokeStyle = colors.primary_color;
    
    context.beginPath();
    //position at the origin and start drawing lines around the perimeter of the canvas, visiting its four corners
    context.moveTo(0, 0);
    context.lineTo(canvas.width, 0);
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(0, canvas.height);
    context.lineTo(0, 0);
    context.stroke();
  }
  
  //this is the main loop of the game, the living and breathing part of the pong engine that we're writing
  function startGame(){
    //startBall("Player 1");
    //startPanels();
    drawBackground();
    drawBorder();
    //drawPanels();
    //drawBall();
    //drawScore();
  }

  //get the fire going get the fire going
  startGame();
}