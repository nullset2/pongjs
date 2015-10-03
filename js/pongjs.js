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

  //this function draws the players onscreen --nothing interactive though
  function drawPanels(){
    context.fillStyle = colors.primary_color;
    //player 1
    context.fillRect(upperPanel.pos_x, 10, upperPanel.width, upperPanel.height);
    //player 2
    context.fillRect(upperPanel.pos_x, canvas.height - 20, upperPanel.width, upperPanel.height);
  }

  //this function draws the ball element onscreen --nothing interactive either
  function drawBall(){
    context.fillStyle = colors.primary_color;
    context.beginPath();
    //draw an arc that starts and ends at the same place => circle
    context.arc(ball.pos_x, ball.pos_y, ball.radius, 0, Math.PI * 2, true);
    context.fill();
  }

  //this function updates the scores on the play field
  function drawScore(){
    context.fillStyle = colors.primary_color;
    context.font = "36px Consolas";
    context.fillText(game.score_p1, canvas.width/2.1, canvas.height/3);
    context.fillText(game.score_p2, canvas.width/2.1, canvas.height/1.3);
  }

  //this draws a message before the game action begins
  function drawInitialComment(){
    context.fillStyle = colors.primary_color;
    context.font = "22px Consolas";
    context.fillText("Press SPACE to start", 37, canvas.height/1.2)
  }

  //this is the main loop of the game, the living and breathing part of the pong engine that we're writing
  //come on you wild heart, go ahead and do your thing, you!
  function startGame(){
    //startBall("Player 1");
    //startPanels();
    drawBackground();
    drawBorder();
    drawPanels();
    drawBall();
    drawScore();
    drawInitialComment();
  }

  //come on baby light my fire
  startGame();
}