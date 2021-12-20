/* Things to do

Set lifetime to the road, cone and fuel

Implement a solution so the car doesn't go offscreen

The road has to stop when the fuel is out

Have it so that if run out of fuel, game over

Make it so that if the car touches cones, game ends

Add sound


*/

var car, carImg
var road
var fuel, fuelImg
var cone, coneImg
var gameState = "play";
var fuelCount = 1000


function preload()
{
    carImg = loadImage("car.png")
    fuelImg = loadImage("fuel.png")
    coneImg = loadImage("cone.png")
}

function setup()
{
    createCanvas(windowWidth, windowHeight)

    car = createSprite(windowWidth / 10, windowHeight / 2)
    car.addImage(carImg);
    car.scale = 0.2
    car.rotation = 180

    road = createSprite(windowWidth + 100, windowHeight / 2, 100, 10)
    road.velocityX = -5
    road.shapeColor = "white"
    road.depth = car.depth - 1;

}

function draw()
{



    background(50)

    textSize(30)
    text("Fuel = "+fuelCount,windowWidth/0.59/2,windowHeight/10);


    if (gameState == "play")
    {
        if (frameCount % 50 == 0)
        {
            road = createSprite(windowWidth + 100, windowHeight / 2, 100, 10)
            road.velocityX = -5
            road.shapeColor = "white"
            road.depth = car.depth - 1;
        }
        if (frameCount % 200 == 0)
        {
            fuel = createSprite(windowWidth, Math.round(random((0, windowHeight))))
            fuel.velocityX = -5
            fuel.addImage(fuelImg)
            fuel.scale = 0.15
        }
        if (frameCount % 200 == 0)
        {
            cone = createSprite(windowWidth, Math.round(random((0, windowHeight))))
            cone.velocityX = -5
            cone.addImage(coneImg)
            cone.scale = 0.175


        }
        if (keyDown("UP_ARROW"))
        {
            car.y = car.y - 6
        }
        if (keyDown("DOWN_ARROW"))
        {
            car.y = car.y + 6
        }
        if(frameCount%1==0)
        {
            fuelCount = fuelCount-1
        }
        if(fuelCount==0)
        {
            gameState = "end"
        }


    }
    if(gameState == "end")
    {

        fuel.velocityX = 0
        fuel.visible = false
        cone.velocityX = 0
        cone.visible = false
    }



    drawSprites()



}