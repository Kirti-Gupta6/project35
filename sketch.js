//Create variables here
var dog, happyDog, database, foodS;
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  hdogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);

   var foodStock = database.ref('food');
  foodStock.on("value", readStock);
  dog.scale = 0.2;
  
  
}


function draw() {  
 background("coral");
 if(keyWentDown(UP_ARROW)){
   writestock(foodS)
   dog.addImage(hdogImg);
 }
  drawSprites();
  

}
function readStock(data){
  food = data.val();
  dog.x = position.x;
  dog.y = position.y;
 }



