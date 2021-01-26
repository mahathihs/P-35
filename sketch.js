//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogImg,happydogImg;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg1.png");
  happydogImg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);

  database=firebase.database;
  console.log(database);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}

function draw() {  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImg);

  drawSprites();

  textSize(25);
  fill("white");
  stroke("green");
  text("Note:Press UP_ARROW key to feed Drago milk!",400,350);
  }

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}