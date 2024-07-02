// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Events = Matter.Events,
    Vector = Matter.Vector;

// create an engine
var engine;
var world;
var balls = [];
var pegs = [];
var bounds = [];
var reticle = [];
var flippers = [];
var cols = 11;
var rows = 10;
var leftFlipper;

var plink;
function preload(){
    plink = loadSound('billiard ball hit.mp3');
}


function setup () {
    createCanvas(600, 700);
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;
    engine.gravity.scale = 0.0004;

    function collision(event){
        var pairs = event.pairs;
        for (var i = 0; i < pairs.length; i++){
            var labelA = pairs[i].bodyA.label;
            var labelB = pairs[i].bodyB.label;

            if (labelA == 'ball' && labelB == 'peg'){
                plink.play();
            }

            if (labelA == 'peg' && labelB == 'ball'){
                plink.play();
            }
        }
    }
    Events.on(engine, 'collisionStart', collision);

    var spacing = width / cols;
    //pegs from plinko, will prob repurpose into bumpers

    /*for (var j = 0; j < rows; j ++){
        for (var i = 0; i < cols + 1; i ++){
            var x = i * spacing;
            if (j % 2 == 1){
                x += spacing / 2;
            }
            
            var y = spacing + j * spacing;
            var p = new Peg(x, y, 10)
            pegs.push(p);
        }
    }*/

    //flippers
    leftFlipper = new Flipper(width/2, height/2, 200, 35);
    flippers.push(leftFlipper);


    var b = new Boundary(width/2, height + 50, width, 100);
    bounds.push(b);

    for (var i = 0; i < cols + 1; i ++)
        {
            var x = i * spacing;
            var h = 50;
            var w = 10;
            var y = height - h/2;
            var b = new Boundary(x, y, w, h);
            bounds.push(b);
        }
    var runner = Runner.create();
    //run the engine
    Runner.run(runner, engine);
}

function updateRotation(){
}

function mousePressed(){
    balls.push(new Ball(mouseX, 30, 15));
}


function mouseMoved(){  
   // reticle.push(new Reticle(mouseX, 15, 15));
}

function draw(){
    background(51);
    if (mouseIsPressed == true)
        {
            //Body.setAngle(leftFlipper.body, leftFlipper.body.angle + leftFlipper.body.rotationSpeed);
            var pivot = Vector.create(width/2,height/2);
            Body.rotate(leftFlipper.body, 0.1, pivot, false);
        }
    
    for (var i = 0; i < balls.length; i++)
        {
            balls[i].show();
            if (balls[i].isOffScreen()){
                balls.splice(i, 1);
                i--;
            }
        }
    for (var i = 0; i < pegs.length; i++){
        pegs[i].show();
    }  

    for (var i = 0; i < bounds.length; i++){
        bounds[i].show();
    }  

    for (var i = 0; i < flippers.length; i++){
        flippers[i].show();
    }  

    for (var i = 0; i < reticle.length; i++){
        reticle[i].show();
        if(reticle.length > 1)
            {
                reticle.splice(1, 1);
            }

    }
}

