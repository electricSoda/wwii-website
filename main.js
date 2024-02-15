// $(function() {
//     var controller = new ScrollMagic.Controller();
// 	var tweens = [];
// 	const tl = gsap.timeline({ paused: true });


// 	for (var i=1; i<=document.body.childElementCount; i++) {
// 		tweens.push(new gsap.to("#s"+i, {
// 			duration: 1,
// 			alpha:1,
// 			x:0
// 		  })
// 		);
// 	}
// 	var scenes = []
// 	for (var i=0; i<tweens.length; i++) {
// 		scenes.push(new ScrollMagic.Scene({
// 			triggerElement: '#s' +(i+1)
// 		})
// 		.setTween(tweens[i]));	
// 	}
// 	controller.addScene(scenes)
// });


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()

	for (var i=1; i<=document.getElementById("slideContainer").childElementCount-1; i++) {
		wipeAnimation
		.to("#slideContainer", 5, {delay: i*8000, pin:true})
		.to("#slideContainer", 45*500, {z: -100})		// move back in 3D space
        .to("#slideContainer", 60*500,   {x: "-" + i*1/9*100 + "%"})	// move in to first panel
        .to("#slideContainer", 45*500, {z: 0})				// move back to origin in 3D space
	}

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: 0,
            duration: "1000%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);

	smoothScroll({ frameRate        : 150, // [Hz]
					animationTime    : 11111000, // [px]
					stepSize         : 50, // [px]
	});

});