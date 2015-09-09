function goBack() {
    location.assign('/page2.html');
}

function goForth() {
    location.assign('/page4.html');
}

function loadImage() {
    var preload = new createjs.LoadQueue();
    preload.addEventListener("fileload", loaded);
    preload.loadFile("assets/images/cat1.png");
    preload.loadFile("assets/images/beach1.jpg");
}


var stage1, circle, text, nextNav, backNav, cat;

function loaded() {
    stage1 = new createjs.Stage("demoCanvas");

    circle = new createjs.Shape();
    circle.graphics.beginFill("yellow").drawCircle(0, 0, 40);
    circle.y = 50;
    stage1.addChild(circle);

    // var image = event.target;
    cat = new createjs.Bitmap("assets/images/cat1.png");
    cat.x = -350;

    cat.addEventListener("click", function(event) {
        alert("meow");
    })

    stage1.addChild(cat);

    text = new createjs.Text("Cats on Canvas", "28px Arial", "#000");
    text.x = 100;
    text.y = 50;
    stage1.addChild(text);

    nextNav = new createjs.Text("Next", "16px Arial", "#000");
    nextNav.x = 760;
    nextNav.y = 180;
    stage1.addChild(nextNav);
    nextNav.addEventListener("click", goForth);

    backNav = new createjs.Text("Back", "16px Arial", "#000");
    backNav.x = 5;
    backNav.y = 180;
    stage1.addChild(backNav);
    backNav.addEventListener("click", goBack);

    createjs.Ticker.on("tick", tick);
    createjs.Ticker.setFPS(40);
}

function tick(event) {
    circle.x = circle.x + 5;
    if (circle.x > stage1.canvas.width) {
        circle.x = 0;
    }

    cat.x = cat.x + 1;
    if (cat.x > stage1.canvas.width) {
        cat.x = -350;
    }
    stage1.update(event); // important!!
}

window.onload = loadImage;
