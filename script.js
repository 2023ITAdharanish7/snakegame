 const gameBoard = document.getElementById("gameBoard")
const pencil = gameBoard.getContext("2d");
const scoreid = document.getElementById("scoreVal");

const width = gameBoard.width
const height = gameBoard.height 
const Foodwh = 25; 
let yVal =0;
let xVal =25;
let score =0;
let active =true
let start = true
let Foodx;
let Foody;
let snake=[
   {x:Foodwh*3,Y:0},
   {x:Foodwh*2,Y:0},
   {x:Foodwh,Y:0},
   {x:0,Y:0}     
]
window.addEventListener("keydown",keyPress)

startGame();
 function startGame(){
    pencil.fillStyle = "#212121";
    pencil.fillRect(0,0,width,height);   
    createfood(); 
   displayfood();
   drawSnake();
  
 }

function clear(){
     pencil.fillStyle = "#212121";
    pencil.fillRect(0,0,width,height); 
}

function createfood(){
    Foodx = Math.floor(Math.random()*500/25)*25;
    Foody = Math.floor(Math.random()*500/25)*25;
}

 function displayfood(){
 pencil.fillStyle = "red";
    pencil.fillRect(Foodx,Foody,Foodwh,Foodwh);
 }
function drawSnake(){
pencil.fillStyle="blue"
pencil.strokeStyle="#212121"
snake.forEach((snakepart)=>{
   pencil.fillRect(snakepart.x,snakepart.Y,Foodwh,Foodwh)
pencil.strokeRect(snakepart.x,snakepart.Y,Foodwh,Foodwh)})
}

function moveSnake(){
   const head ={x:snake[0].x+xVal,
      Y:snake[0].Y+yVal};
   snake.unshift(head)
   if(snake[0].x==Foodx && snake[0].Y==Foody){
      score+=1;
      scoreid.textContent = score;
      createfood();
   }
   else{
   snake.pop()
   }

}
function nextTick(){
   if(active){
   setTimeout(()=>{
   moveSnake();
   clear();
   displayfood();
   drawSnake();
   checkGameOver();
   nextTick();
   },200)
}
}

function keyPress(event){
   if(!start){
      start = true;
      nextTick();
   }
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

switch(true){
case (event.keyCode == LEFT && xVal!=Foodwh):
   xVal=-Foodwh;
   yVal=0;
   break;

   case (event.keyCode == RIGHT && xVal!=-Foodwh):
   xVal=Foodwh;
   yVal=0;
   break;

   case (event.keyCode == UP && yVal!=Foodwh):
   xVal=0;
   yVal=-Foodwh;
   break;

   case (event.keyCode == DOWN && yVal!=-Foodwh):
   xVal=0;
   yVal=+Foodwh;
   break;
}
}

function checkGameOver(){
   switch(true){
      case(snake[0].x<0):
      case(snake[0].x>=width):
      case(snake[0].Y<0):
      case(snake[0].Y>=height):
   }
}