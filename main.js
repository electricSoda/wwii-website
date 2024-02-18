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

    var count = document.getElementById("slideContainer").childElementCount;

	for (var i=1; i<count; i++) {
		wipeAnimation
		.to("#slideContainer", 5, {delay: i, pin:true})
		.to("#slideContainer", 5, {z: -35})		// move back in 3D space
        .to("#slideContainer", 8,   {x: "-" + i*1/count*100 + "%"})	// move in to first panel
        .to("#slideContainer", 5, {z: 0})				// move back to origin in 3D space
	}

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "1900%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);

	smoothScroll({ frameRate        : 150, // [Hz]
					animationTime    : 11111000, // [px]
					stepSize         : 50, // [px]
	});

});