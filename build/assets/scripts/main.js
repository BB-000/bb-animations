var rotation = 0,
	rotation2 = 0;

//set a perspective on the container so we can see the 3D-ness
TweenLite.set(".catbox", {perspective: 500});
//offset the origin on the z-axis to make the spins more interesting.
TweenLite.set(".catt", {transformOrigin:"center center -150px"});
//pulsate the box using scaleX and scaleY
TweenMax.to(".catt", 1.2, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});


TweenMax.staggerFrom(".title1-wrap", 1, {opacity:0, y:200, rotation:360, scale:2,delay:2, },1, complete);



function complete() {
	TweenMax.to(".title1-wrap", 4, {opacity:0});
	TweenMax.to("img.catt", 4, {width:500, ease:Power4.easeInOut, onComplete:anim1});
}

function anim1() {
	TweenMax.to(".catt", 2, {height:30, onComplete: up});
}

function up() {
	TweenMax.to(".catt", 2, {height:600, onComplete: anim1});
}

$(".catt2").click(function(){
	 rotation2 += 2000;
     TweenMax.to(".catt2", 3, {rotation:rotation2});
});

$(".catt").click(function(){
	rotation += 360;
	TweenLite.to(".catt", 4, {rotationX:rotation, ease:Elastic.easeOut});
});




TweenMax.from("#title1", 2, {top:-100, rotation:-40, scale: 0.5, onComplete: titleGo});

var rotatetitle = 0;
function titleGo() {
	rotatetitle += 360;
	TweenMax.to("#title1", 3, {rotationY:rotatetitle});
}




// Canvas

// if (window.location.pathname == '/page2.html') {



// TweenMax.to(cat, 4, {alpha:0.5, onUpdate:stage.update});









var tmax_options = {
  delay: 3,
  paused: false,
  onComplete: function() {
    console.log('animation is complete');
  },
  onCompleteScope: function() {
    console.log('animation scope is complete');
  },
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
  },
  onStartScope: function() {
    console.log('on start scope called');
  },
  onUpdate: function() {
    console.log('on update called');
  },
  onUpdateScope: function() {
    console.log('on update scope called');
  },
  onRepeat: function() {
    console.log('on repeat called');
  },
  onRepeatScope: function() {
    console.log('on repeat scope called');
  },
  onReverseComplete: function() {
    console.log('on reverse complete');
  },
  onReverseCompleteScope: function() {
    console.log('on reverse complete scope called');
  },
  autoRemoveChildren: false,
  smoothChildTiming: false,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  onCompleteParams: [],
  onReverseCompleteParams: [],
  onStartParams: [],
  onUpdateParams: [],
  onRepeatParams: []
};




// var tl = new TimelineLite();

// tl.to(".txt1", 10, {left: "120%"}, "+=1")
// .from(".txt2", 2, {top:-100}, "-=2")
// .from(".txt3", 1, {top:-100, autoAlpha:0}, "+=1")
// .from(".txt4", 1, {autoAlpha:0}, "+=1")
// .from(".txt5", 1, {autoAlpha:0}, "+=1");

function float1(){
TweenMax.to(".fall", 1, {rotation:5, onComplete:float2});
// TweenMax.to(".fall", 10, {left: "120%"});
}

function float2(){
TweenMax.to(".fall", 1, {rotation:-5, onComplete:float1});
}


// TweenMax.from(".txt3", 6, {autoAlpha:0});

var time1 = new TimelineMax({delay:3});

time1.staggerFrom(".fall", 2, {top:-50, ease: Elastic.easeOut.config(1, 0.5), onComplete:float1}, 4);
time1.staggerTo(".fall", 10, {left: "120%"}, 6, "-=15");
time1.from(".txt5", 3, {autoAlpha:0, scale:0.5, rotation:-40, ease: Elastic.easeOut.config(1, 0.5) }, "-=16");




// TweenMax.staggerFrom(".fall", 2, {top:-50, ease: Elastic.easeOut.config(1, 0.5), onComplete:float1}, 4);
// TweenMax.staggerTo(".fall", 10, {left: "120%"}, 5);


var cat3 = $("#cat-3");
var circle3 = $("#circle-3");

TweenMax.to(circle3, 4, {left:"120%", ease: Power0.easeNone, repeat:10});
TweenMax.to(cat3, 12, {left:"100%", ease: Power0.easeNone, repeat:10});

// function swapClass1(){
// TweenMax.to(".title-3", 3, {className:'+=title-A', onComplete:swapClass1});
// console.log("!");
// }

// function swapClass2(){
// TweenMax.to(".title-3", 3, {className:"-=title-A", className:"+=title-B", onComplete:swapClass2});
// }

// $(function() {
// swapClass1();
// });

$(cat3).click(function() {
  alert( "meoww" );
});





if (window.location.pathname == '/page5.html') {

	var stage, parrot, beach, widthC, height, text1;
	var canvas;
	


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



// $(window).resize(function(){
// console.log(canvas.width);
// 	});


}