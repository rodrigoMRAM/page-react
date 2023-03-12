
    // init controller
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
                    triggerElement: "#gatillo",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#gatillo", "visible")
                .addTo(controller);
