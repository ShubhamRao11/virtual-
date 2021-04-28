var happyDog,hungryDog,dog,food;
var database;

function preload()
{
 happyDog=loadImage("images/dog2.png");
 hungryDog=loadImage("images/dog1.png");

}

function setup() {
	createCanvas(500, 500);
  database =firebase.database();

  dog = createSprite(250,300,50,50);
  dog.addImage(hungryDog);
dog.scale = 0.2;

writedata(20);

var pet = database.ref('food');
pet.on("value",function(data){
  food = data.val()
})
}


function draw() {  
background("black");

if(keyWentDown(UP_ARROW)){
food = food-1;
if(food<0){
  food=0;
}
writedata(food);
dog.addImage(happyDog);
}

textSize(20);
fill("red");
stroke("white");
text("Press UP ARROW KEY To Feed The Dog",100,50);

text("Food Remaining :"+food,250,150)
  drawSprites();
  //add styles here

}

function writedata(food){
var pet = database.ref('/').update({
  food:food
})
}

