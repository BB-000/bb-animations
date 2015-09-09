function float1(){
TweenMax.to(".fall", 1, {rotation:5, onComplete:float2});
// TweenMax.to(".fall", 10, {left: "120%"});
}

function float2(){
TweenMax.to(".fall", 1, {rotation:-5, onComplete:float1});
}


// TweenMax.from(".txt3", 6, {autoAlpha:0});

var time1 = new TimelineMax({delay:3});

time1.staggerFrom(".fall", 2, {top:-270, ease: Elastic.easeOut.config(1, 0.5), onComplete:float1}, 4);
time1.staggerTo(".fall", 10, {left: "120%"}, 6, "-=15");
time1.from(".txt5", 3, {autoAlpha:0, scale:0.5, rotation:-40, ease: Elastic.easeOut.config(1, 0.5) }, "-=16");