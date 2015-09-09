var cat3 = $("#cat-3");
var circle3 = $("#circle-3");
var title3a = $("#title-3");
var title3b = $("#title-3b");

TweenMax.fromTo(circle3, 3, {left:"-15%"}, {left:"100%", ease: Power0.easeNone, repeat:-1});
TweenMax.fromTo(cat3, 10,{left:"-50%"}, {left:"100%", ease: Power0.easeNone, repeat:-1});

// TweenMax.from(title3a, 5, {autoAlpha:0, ease: Power3.easeIn});
// TweenMax.from(title3b, 8, {autoAlpha:0, ease: Power3.easeIn});
// function cHover(){
// TweenMax.to(circle3, 3, {borderRadius: "0%", ease: Expo.easeOut});
// }

var tl = new TimelineMax({repeat:-1});

tl.from(title3a, 2, {autoAlpha:0, ease: Power3.easeIn})
  .to(title3a, 2, {autoAlpha:0, ease: Power3.easeIn}, "switch")
  .from(title3b, 2, {autoAlpha:0, ease: Power3.easeIn}, "switch")
  .to(title3b, 2, {autoAlpha:0, ease: Power3.easeIn});

$(cat3).click(function() {
  alert( "meoww" );
});

$(circle3).mouseleave(function() {
TweenMax.to(circle3, 3, {borderRadius: "50%", scale: 1, ease: Elastic.easeOut.config(2, 0.3)});
});

$(circle3).mouseover(function() {
TweenMax.to(circle3, 2, {borderRadius: "1%", scale:2, ease: Expo.easeOut});
});