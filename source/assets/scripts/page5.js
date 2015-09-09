var stage, canvas, parrot, beach, widthC, height, text1;

function loadImage() {
  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload", loaded);
  preload.loadFile("assets/images/cat1.png");
  preload.loadFile("assets/images/beach1.jpg");
  preload.loadFile("assets/images/parrot1.png");
}

function loaded(){
	canvas = document.getElementById('canvasFive');
	stage = new createjs.Stage(canvas);
	// var widthC = canvas.width;

	parrot = new Image();
	parrot.src = "assets/images/parrot1.png";	

	cat = new Image();
	cat.src = "assets/images/cat1.png";

	parrot = new createjs.Bitmap(parrot);
	cat = new createjs.Bitmap(cat);
	beach = new createjs.Bitmap("assets/images/beach1.jpg");

	beach.scaleY = 0.32;
	beach.scaleX = 0.6;

	parrot.x = -130;
	parrot.y = -100;
	parrot.scaleX = 0.3;
	parrot.scaleY = 0.3;
	parrot.regY = 220;
	parrot.regX = 150;

	cat.scaleX = 0.2;
	cat.scaleY = 0.2;
	cat.x = 400;
	cat.y = -110

	text1 = new createjs.Text("Holiday Pet Insurance.org", "28px Arial", "#ff7700");
	text1.x = 460;
	text1.y= 50;
	text1.outline = 2;
	text1.alpha = 0;

	stage.addChild(beach);
	stage.addChild(cat);
	stage.addChild(parrot);
	stage.addChild(text1);

	TweenMax.ticker.addEventListener("tick", stage.update, stage);

	// TweenMax.to(parrot, 2, {delay:1, x:600, y:10, rotation:60, ease: Cubic.easeInOut, repeat:-1, yoyo:true});

	var time9 = new TimelineMax({delay:1, repeat:-1, repeatDelay:3});
	time9.to(cat, 2, {y:110, ease: Bounce.easeOut})
	.to(parrot, 5, {x:1000, y:10, ease: Cubic.easeInOut}, 2)
	.to(parrot, 1.5, {rotation:30, y:90, ease: Cubic.easeInOut}, 3)
	.to(parrot, 1, {rotation:-40, y:-100, ease: Power2.easeInOut}, 4.5)
	.to(cat, 1.5, {y:-120, x:1000}, 4.5)
	.to(text1, 1, {alpha:1, ease: Cubic.easeInOut}, "-=2.5")
	.from(text1, 1.5, {skewY: 100}, "-=2.5")
	.to(text1, 4, {rotation: 3000, scaleY: 10, scaleX:10, alpha:0}, "+=3")


 	var slider = new GSAPTLSlider(time9, "container", {
        width: 300
    });

}

window.onload = loadImage;
