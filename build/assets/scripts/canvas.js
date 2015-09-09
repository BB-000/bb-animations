var stage;
var cat;
var circle1;


function init() {
	var image = new Image();
    image.src = "../assets/images/cat1.png";
    image.onload = loaded();
};


// function init(){
function loaded() {
    var image = event.target;

    var stage = new createjs.Stage("demoCanvas");

    var circle1 = new createjs.Shape();
    var cat = new createjs.Bitmap(image);

    circle1.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle1.x = 100;
    circle1.y = 100;


    // createjs.Ticker.on("tick", tick);
    // createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener("tick", handleTick);

    stage.addChild(circle1);
    stage.addChild(cat);

    stage.update();

}

// function tick(event){
// 	circle.x = circle.x + 5;
// 	if (circle.x > stage.canvas.width) { circle.x = 0; }
// 	stage.update(event);

// };

// createjs.Ticker.addEventListener("tick", handleTick);
function handleTick(event) {
    // circle1.x = circle1.x + 5;
    // if (circle1.x > stage.canvas.width) { circle1.x = 0; }
    // stage.update(event);
}





window.onload = init;
