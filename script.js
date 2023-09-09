function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()


var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"

})

function topscreen() {

    var jojo = gsap.timeline();

    jojo.from("#lowest", {
        onStart: function () {
            $('#lowest').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#lowest').textillate('out');

                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })

        .from("#second-low", {
            opacity: 0,
            delay: 0.9,
            onStart: function () {
                $('#second-low').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#second-low').textillate('out');

                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })


        .from("#second-top", {
            opacity: 0,
            delay: 0.9,
            onStart: function () {
                $('#second-top').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#second-top').textillate('out');

                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })

        .from("#top", {
            opacity: 0,
            delay: 0.9,
            onStart: function () {
                $('#top').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#top').textillate('out');

                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })

        .from("#top1", {
            opacity: 0,
            delay: 0.9,
            onStart: function () {
                $('#top1').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#top1').textillate('out');

                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })

        .from("#top2", {
            opacity: 0,
            delay: 0.9,
            onStart: function () {
                $('#top2').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#top2').textillate('out');

                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })

        .to("#top-screen", {
            top: "-100%",
            delay: 0.9,
            duration: 1.2,
            ease: "Power4.easeOut"
        })

        .from("#page1 h1", {
            y: -10,
            // rotate: 10,

            opacity: 0,
            delay: 0.3,
            duration: 0.7
        },"uu")

        .from("#page1 h2", {
            y: 10,
            rotate: 10,
            opacity: 0,
            delay: 0.3,

            duration: 0.7
        },"uu")
        

}

topscreen();




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

tl.to("#page1 h1", {
    x: -100,
}, "anim")
tl.to("#page1 h2", {
    x: 100
}, "anim")

tl.to("#page1 video", {
    width: "90%"
}, "anim")


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to("#main", {
    backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to("#main", {
    backgroundColor: "#0F0D0D"
})

function page2Move() {
    gsap.from("#page2 h1", {
        opacity: 0,

        scrollTrigger: {
            trigger: "#page2 h1",
            scroller: "#main",
            start: "50% 50%",
            end: "50% 30%",
            scrub: 3,


        },
        onStart: function () {
            $('#page2 h1').textillate({
                in: {
                    effect: 'fadeInUp',
                    delayScale: 0.7,
                }
            })
        }
    })
}

page2Move();

gsap.from(".page2-left h2", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.35,
    scrollTrigger: {
        trigger: ".page2-left h2",
        scroller: "#main",
        start: "50% 50%",
        end: "40% 40%",
        scrub: 3,

    }
})

gsap.from(".page2-right p", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.35,
    scrollTrigger: {
        trigger: ".page2-right p",
        scroller: "#main",
        start: "70% 50%",
        end: "70% 40%",
        scrub: 3,
        // markers:true
    }
})

gsap.from(".page2-right ", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.35,
    scrollTrigger: {
        trigger: ".page2-right ",
        scroller: "#main",
        start: "70% 50%",
        end: "70% 40%",
        scrub: 3,
        // markers:true
    }
})







var boxes = document.querySelectorAll(".box")
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "330px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
        crsr.style.transform = "translate(-50%, -50%)"
        // att.style.zIndex = 99

    })

    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         purple.style.display = "block"
//         purple.style.opacity = "1"

//     })

//     elem.addEventListener("mouseleave", function(){
//         purple.style.display = "none"
//         purple.style.opacity = "0"
//     })
// })


function navbar() {
    var btn2 = document.querySelector("#nav #btn2")
    var work = document.querySelector("#work")
    btn2.addEventListener("mouseenter", function () {
        work.style.opacity = "1"
        work.style.display = "block"

    })

    btn2.addEventListener("mouseleave", function () {
        work.style.opacity = "0"
        work.style.display = "none"

    })


    var btn3 = document.querySelector("#nav #btn3")
    var studio = document.querySelector("#studio")
    btn3.addEventListener("mouseenter", function () {
        studio.style.opacity = "1"
        studio.style.display = "block"

    })

    btn3.addEventListener("mouseleave", function () {
        studio.style.opacity = "0"
        studio.style.display = "none"

    })

    var btn4 = document.querySelector("#nav #btn4")
    var contact = document.querySelector("#contact")
    btn4.addEventListener("mouseenter", function () {
        contact.style.opacity = "1"
        contact.style.display = "block"

    })

    btn4.addEventListener("mouseleave", function () {
        contact.style.opacity = "0"
        contact.style.display = "none"

    })

    var btn1 = document.querySelector("#nav #btn1")
    var home = document.querySelector("#home")
    btn1.addEventListener("mouseenter", function () {
        home.style.opacity = "1"
        home.style.display = "block"

    })

    btn1.addEventListener("mouseleave", function () {
        home.style.opacity = "0"
        home.style.display = "none"

    })

    var circle = document.querySelector("#circle")
    var gol = document.querySelector("#gol")
    circle.addEventListener("mouseenter", function () {
        gol.style.opacity = "1"
        gol.style.display = "block"

    })

    circle.addEventListener("mouseleave", function () {
        gol.style.opacity = "0"
        gol.style.display = "none"

    })
}

navbar();

function pg1() {
    var videopg1 = document.querySelector("#page1 video")

    videopg1.addEventListener("mouseenter", function () {
        crsr.style.width = "100px"
        crsr.style.height = "27px"

        crsr.style.borderRadius = "15px"
        crsr.innerHTML = "SOUND ON"
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "black"


    })

    videopg1.addEventListener("mouseleave", function () {
        crsr.style.width = "22px"
        crsr.style.height = "22px"

        crsr.style.borderRadius = "50%"
        crsr.innerHTML = ""
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "#fff"


    })

}

pg1();


function pg3() {
    var videopg3 = document.querySelector(".page3-part1 video")
    var v2 = document.querySelector(".page3-part1 #v2")
    var imgpg3 = document.querySelector("#page3 img")

    videopg3.addEventListener("mouseenter", function () {
        crsr.style.width = "70px"
        crsr.style.height = "27px"
        videopg3.style.filter = "blur(5px)"

        crsr.style.borderRadius = "15px"
        crsr.innerHTML = "VIEW"
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "black"


    })

    videopg3.addEventListener("mouseleave", function () {
        crsr.style.width = "22px"
        crsr.style.height = "22px"
        videopg3.style.filter = "blur(0px)"

        crsr.style.borderRadius = "50%"
        crsr.innerHTML = ""
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "#fff"


    })

    v2.addEventListener("mouseenter", function () {
        crsr.style.width = "70px"
        crsr.style.height = "27px"
        v2.style.filter = "blur(5px)"

        crsr.style.borderRadius = "15px"
        crsr.innerHTML = "VIEW"
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "black"


    })

    v2.addEventListener("mouseleave", function () {
        crsr.style.width = "22px"
        crsr.style.height = "22px"
        v2.style.filter = "blur(0)"

        crsr.style.borderRadius = "50%"
        crsr.innerHTML = ""
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "#fff"


    })

    imgpg3.addEventListener("mouseenter", function () {
        crsr.style.width = "70px"
        crsr.style.height = "27px"
        imgpg3.style.filter = "blur(3px)"
        crsr.style.borderRadius = "15px"
        crsr.innerHTML = "VIEW"
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "black"


    })

    imgpg3.addEventListener("mouseleave", function () {
        crsr.style.width = "22px"
        crsr.style.height = "22px"
        imgpg3.style.filter = "blur(0)"

        crsr.style.borderRadius = "50%"
        crsr.innerHTML = ""
        crsr.style.fontSize = "14px"
        crsr.style.display = "flex"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "#fff"


    })



}

pg3();

function page3Move() {
    gsap.from("#page3 h1", {
        opacity: 0,

        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "#main",
            start: "60% 50%",
            end: "50% 40%",
            scrub: 3,
            //    markers:true

        },
        onStart: function () {
            $('#page3 h1').textillate({
                in: {
                    effect: 'fadeInLeftBig',
                    delayScale: 1,
                }
            })
        }
    })
}

page3Move();

function page5() {
    gsap.from("#page5 h2", {
        opacity: 0,

        scrollTrigger: {
            trigger: "#page5 h2",
            scroller: "#main",
            start: "60% 50%",
            end: "50% 40%",
            scrub: 3,


        },
        onStart: function () {
            $('#page5 h2').textillate({
                in: {
                    effect: 'fadeInLeftBig',
                    delayScale: 1,
                }
            })
        }
    })
}

page5();


gsap.from("#let1 h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#let1 h2",
        scroller: "#main",
        start: "60% 50%",
        end: "50% 40%",

        scrub: 3
    }
})


gsap.from(".let2-part1 h4", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".let2-part1 h4",
        scroller: "#main",
        start: "top 70%",
        end: "top 69%",

        scrub: 3
    }
})


