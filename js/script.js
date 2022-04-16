import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0"

$(document).ready(function () {

    var tl = (trigger, scrub = true, xTimes = false, pinned = false, start, end) => gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            // markers: true,
            scrub: scrub,
            once: xTimes,
            pin: pinned,
            start: start,
            end: end,
            // pinSpacing: false,
            toggleActions: "restart pause reverse pause"
        }
    });




    // ================ Achieved letterizing ===================
    const achieved = new Letterize({
        targets: ".container__panel1_main"
    });
    const titles = new Letterize({
        targets: ".container__panel1_title1, .container__panel1_title2, .container__panel1_title3"
    });
    const diff = new Letterize({
        targets: ".container__panel1_title4"
    });
    tl(".container__panel1_main", 1, false, false, "100% 70%", "10% 10%")
        .from(achieved.listAll, { opacity: 0, stagger: .01 });
    tl(".container__panel1_main", 1, false, false, "100% 70%", "10% 10%")
        .from(titles.listAll, { opacity: 0 });
    tl(".container__panel1_main", 1, false, false, "100% 70%", "10% 10%")
        .from(diff.listAll, { opacity: 0, stagger: .01 });

    // ================ Scroll Opacity Before Values ===================
    const all = document.querySelectorAll(".animated2, .animated3");
    const eles = all.forEach((ele) => {
        tl(ele, 1, false, false, "top 10%", "top 1%")
            .to(ele, { y: "-10%", opacity: "0" });

    })

    // ===================== Stacking Values ============================
    tl(".diff", 1, false, true, "top 0%", "2000% 1%")
        .to(".diff", { y: "0" });
    tl(".creat", 1, false, true, "top 7%", "1450% 1%")
        .to(".creat", { y: "0" });
    tl(".funn", 1, false, true, "top 14%", "1250% 1%")
        .to(".funn", { y: "0" });
    tl(".likey", 1, false, true, "top 21%", "1290% 1%")
        .to(".likey", { y: "0" });

    // ===================== Left/Right ============================
    tl(".container__panel5_1_left", 1, false, false, "top 100%", "bottom 10%")
        .from(".container__panel5_1_left", {
            x: "-150%",
            ease: "power1"
        });
    tl(".container__panel5_1_right", 1, false, false, "top 100%", "bottom 10%")
        .from(".container__panel5_1_right", {
            x: "150%",
            ease: "power1"
        });

    // ===================== Buttons ============================

    tl(".first_btn, .second_btn", 1, false, false, "top 70%", "bottom 70%")
        .from(".first_btn, .second_btn", {
            opacity: 0,
            ease: "none"
        });
    let clicked = $(".clicked")
    const fstBtn = $(".first_btn").on("click", () => clicked.html("Ok. Now things got heated! <br> I believe you chose to go the hard way"))

    const scndBtn = $(".second_btn").on("click", () => {
        clicked.html("Yeah!!<br>  Alright, That seems about right");
        // tl(clicked, false, false, false)
        //     .to(clicked, { y: "300%", opacity: 0, delay: 2, ease: "power1" })
    })


    // ===================== TODAY ============================
    tl(".today", 1, false, false, "top 30%", "bottom 10%")
        .to(".today", {
            x: "-30%",
            y: "110%",
            color: "#ffc62c",
            opacity: .1,
            scale: 1.5,
            duration: 100
        });

    // ===================== Quote ============================
    tl(".container__panel6_quote", 1, false, false, "top 80%", "50% 10%")
        .to(".container__panel6_quote", { y: "300%", opacity: 0, delay: 2, ease: "power1" })

    // ===================== Horizontal Scroll ============================

    let container = document.querySelector(".container__panel4");

    gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: container,
            // markers: false,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            start: "1% 30%",
            // end: () => "+=" + container.offsetWidth
        },
    })
    // ==================================================================
    // ==================================================================
    // ==================================================================
    // ==================================================================
    // ==================================================================
    // ===================== Implementation ============================


    // ===================== Implementation ============================
    let impTitle = $(".impLetters")
    const impLetters = new Letterize({
        targets: ".impLetters"
    });
    tl(impTitle, 1, false, false, "100% 70%", "10% 10%")
        .from(impLetters.listAll, { ease: "bounce.in", duration: .3, opacity: 0, stagger: .01 });


    const allLowers = document.querySelectorAll(".lowercase");
    const lowers = allLowers.forEach((lower) => {
        tl(impTitle, 1, false, false, "100% 70%", "10% 10%")
            .from(lower, { scale: 0, opacity: 0, ease: "bounce.in" })
    });

    // ===================== Yellow Box ============================
    tl(".container__panel7_2", .4, false, false, "top 80%", "bottom 10%")
        .from(".container__panel7_2", { scale: 0, ease: "power1" })


    // ===================== Counters Bars ============================
    tl(".container__panel7_3", 1, false, false, "0% 70%", "bottom 60%")
        .from(".bars-counters", { scaleY: "0", transformOrigin: "bottom bottom" });

    // ====================i= Counters ============================
    const counters = (className, trigger, toValue, fromValue, delay, up, easing, scrub, start, end, per = "%") => {
        let x = document.querySelector(className)
        let counter = { value: toValue }
        gsap.from(
            counter, {
            value: fromValue,
            // duration: 2,
            delay: delay,
            onUpdate: () => x.innerHTML = Math.round(counter.value) + per,
            ease: easing,
            scrollTrigger: {
                trigger: trigger,
                // markers: 1,
                duration: 2,
                scrub: scrub,
                start: start,
                end: end,
                duration: 2,
                opacity: 0,
                y: up,
            },
        })
    }
    counters(".counter1", ".container__panel7_3", 130, 0, 0, 50, "none", true, "0% 70%", "bottom 60%")
    counters(".counter2", ".container__panel7_3", 195, 0, 0, 50, "none", 1, "0% 70%", "bottom 60%")
    counters(".counter3", ".container__panel7_3", 200, 0, 0, 50, "none", 1, "0% 70%", "bottom 60%")

    // ===================== Counters/Lines ==========================
    const allLines = document.querySelectorAll(".lines-counters");
    const lines = allLines.forEach((line) => {
        tl(".container__panel8_1", 1, false, false, "100% 70%", "10% 10%")
            .from(line, { height: 0, ease: "step" })
    });

    // ===================== Dotted Path ==========================
    tl(".dotted_line", 1, false, false, "top 20%", "10% 10%")
        .from(".dotted_line", { attr: { "stroke-dashoffset": 1000 }, duration: 5, autoAlpha: 0, ease: "power2" })

    // ===================== Side Bars ==========================
    let allBars = document.querySelectorAll(".circle1, .circle3")
    let bars = allBars.forEach((bar) =>
        tl(bar, 1, false, false, "top 60%", "10% 10%")
            .from(bar, { x: -800, ease: "power2" })
    )
    tl(".circle2", 1, false, false, "top 80%", "10% 10%")
        .from(".circle2", { x: 800, ease: "power2" })

    // ===================== Ending ==========================
    tl(".ending", 1, false, false, "top 95%", "10% 10%")
        .from(".ending", { height: 0, ease: "power2", delay: 1 })
        .to(".ending", { backgroundColor: "#cf4520" })
        .to(".ending", { y: 2000, opacity: 0 });

    // ===================== Beginning ==========================
    tl(".begining", 1, false, false, "top 80%", "10% 10%")
        .from(".begining p", { rotate: 1000, ease: "power2", transformOrigin: "center" })
    tl(".begining", 1, false, false, "top 80%", "10% 10%")
        .from(".begining", { x: -1500, ease: "power2", transformOrigin: "center" })


    // ==================================================================
    // ==================================================================
    // ==================================================================
    // ==================================================================
    // ==================================================================
    // ===================== Analytics labels ============================

    // const paras = document.querySelectorAll(".container__panel9_3_para1, .container__panel9_3_para2");

    tl(".container__panel9_2", 1, false, false, "center 20%", "bottom 0%")
        .from(".container__panel9_1_start_analytics", {
            height: 0, ease: Power4.easeOut, delay: 2
        })
        // tl(".for_anime", 1, false, false, "0% 70%", "50% 0%")
        // .from(".for_anime", {
        //     height: 0,
        // }
        .from(".analytics_bar", {
            height: 0, y: 100
        })
        .from(".analytics_label", {
            height: 0, opacity: 0
        });


    // ===================== Paragarphs ==========================
    tl(".container__panel9_3_para1", 1, false, false, "top -20%", "bottom -100%")
        .from(".container__panel9_3_para1", {
            opacity: 0, y: 80, ease: "power1"
        })
        .to(".container__panel9_3_para1", {
            opacity: 0, ease: "power1", delay: 3
        })
    tl(".container__panel9_3_para2", 1, false, false, "top -20%", "bottom -100%")
        .from(".container__panel9_3_para2", {
            opacity: 0, y: 80, ease: "power1"
        })
        .to(".container__panel9_3_para2", {
            opacity: 0, ease: "power1", delay: 3
        })

    // ===================== Metrics ==========================


    tl(".container__panel9_3_figures", 1, false, false, "top -20%", "bottom -100%")
        .from(".container__panel9_3_figures", {
            opacity: 0, y: 80, ease: "power1"
        })

    counters(".analytics_fig1", ".analytics_figs", 4, 0, 0, 50, "none", 1, "top -20%", "bottom -40%", "")
    counters(".analytics_fig2", ".analytics_figs", 3, 0, 0, 50, "none", 1, "top -20%", "bottom -40%", "")
    counters(".analytics_fig3", ".analytics_figs", 2, 0, 0, 50, "none", 1, "top -20%", "bottom -40%", "")
    counters(".analytics_fig4", ".analytics_figs", 7, 0, 0, 50, "none", 1, "top -20%", "bottom -40%", "")



    // ===================== Metrics ==========================
    let percentage = 41
    $(".pieText").html(percentage + "%")
    tl(".svg_pie", 1, false, false, "top -20%", "bottom 10%")
        .to(".pie", {
            strokeDashoffset: 635 - (6.35 * percentage), ease: "power1"
        })
    counters(".pieText", ".svg_pie", percentage, 0, 0, 50, "none", 1, "top -20%", "bottom 10%", "")

    // ===================== Image hover ==========================

    // var currentMousePos = { x: -1, y: -1 };

    // $(".imgg").mousemove((e) => {
    //     var elm = $(this);
    //     var imgLink = e.target.src 

    //     currentMousePos.x = e.pageX;
    //     currentMousePos.y = e.pageY;
    //     console.log(currentMousePos.x, currentMousePos.y, imgLink);

    //     e.attr('data-img',imgLink);

    // })

    //     $(".container__panel10_gallary").css("position", "relative").append(`<img src=${e.target.src} class='magni' style='position:absolute;top:${x}px;left:${y}px;width:600px; box-shadow: 2px 2px 4px 2px rgba(#000000, 0.3);;border: 2px solid #fff'>`)
    //     console.log(e.target)
    // })

    // $(".imgg").mouseleave(() => {
    //     $(".magni").remove()
    //     console.log("left")


    // var options = {
    //     width: 400, // required
    //     offset: {
    //         vertical: 100,
    //         horizontal: 10
    //     }
    // };
    // new ImageZoom(document.querySelector(".container__panel10_gallary"), options);



    // ===================== Switch colors (FIXED ICONS) ==========================
    const cup = $(".cup")
    // var audio = new Audio("./MusicByREDProductions.ogg");
    var audio = document.querySelector(".audio_file");
    var fillColor;
    const cups = document.querySelectorAll(".cup")
    cups.forEach((cup) => {
        gsap.to(cup, {
            scrollTrigger: {
                trigger: ".container__panel7",
                start: "top 110%",
                end: "400% 0%",
                toggleClass: { targets: cup, className: "cup-mod_blend" }
            },
            // fill: "#ffc62c",
        });
    });

    // fetch("./MusicByREDProductions.ogg")
    //     .then(res => res.url)
    //     .then(file => new Audio(file))
    //     .then(audio => {
    $(".audio").click(() => {
        fillColor = $(".cup").css("stroke")
        cup.toggleClass("cup-mod");

        if (cup.hasClass('cup-mod')) {
            cup.css("fill", fillColor)
            $(".music_by").fadeIn().delay(1500).fadeOut()
            audio.play();
            // audio.loop = true;
            console.log(audio)


            // })
        } else {
            cup.css("fill", "none")
            audio.pause();
        }
        // })
    });
    // const audioPlay = setTimeout(audioClick, 3000);

    // ===================== Audio/When Clicked (FIXED ICONS) ==========================


    const screens = document.querySelectorAll(".screen")
    const screen = $(".screen")
    var fillColor2;

    screens.forEach((screen) => {
        gsap.to(screen, {
            scrollTrigger: {
                trigger: ".container__panel7",
                start: "top 110%",
                end: "400% 0%",
                // markers: 1,
                toggleClass: { targets: screen, className: "screen-mod_blend" }
            }
        });
    });


    $(".fullscreen").click(() => {
        fillColor2 = screen.css("stroke")

        $(".screen").toggleClass("screen-mod");

        if (screen.hasClass('screen-mod')) {
            screen.css("fill", fillColor2)

        } else {
            screen.css("fill", "none")
        }
    });






    $(".fullscreen").click(() => {
        // cup.css("fill", fillColor)

        // $(".screen").toggleClass("screen-mod");
        var elem = document.documentElement
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (elem.requestFullScreen) {
                elem.requestFullScreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    })


    // ===================== Footer Dates ============================
    setInterval(() => {
        var today = new Date().toString().slice(4, 15)
        var time = new Date().toString().slice(16, 24)

        $(".today_date").html(`it's now <br> ${time} on ${today} `)
    }, 1000);


    // ===================== Copy Link ============================
    const copyBtn = $(".mobile__btn")

    copyBtn.click(() => {
        navigator.clipboard.writeText(copyBtn.data("link"))
        copyBtn.html("Copied!")
        const copyTimer = setTimeout(() => {
            copyBtn.html("copy URL")

        }, 2000)
    })
});



    // TODO: switch fill colors //if outside the green area
    // TODO: if the internet connection is slow