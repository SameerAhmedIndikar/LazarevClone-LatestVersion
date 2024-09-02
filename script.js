function navAnimation() {
    let nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "26vh"
        });
        tl.set(".nav-part2 h5", { display: "block" }); // Ensure h5 is visible before animating spans
        tl.fromTo(".nav-part2 h5 span",
            {
                opacity: 0,
                y: 20
            }, // Start with spans hidden and slightly below
            {
                opacity: 1,
                y: 0, // Move spans to their original position
                stagger: 0.1, // Display each span with a 0.1s interval
                duration: 2.0 // Duration of the animation for each span
            }
        );
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();

        tl.to(".nav-part2 h5 span", {
            opacity: 0,
            y: 20, // Move spans down slightly as they disappear
            stagger: 0.1, // Hide each span with a 0.1s interval
            duration: 1.0 // Duration of the animation for each span
        });
        tl.set(".nav-part2 h5",
            { display: "none" });
        // Hide h5 after all spans are hidden
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.5
        });
    });
}

navAnimation();

function buttonAnimation() {
    // Select all buttons
    const buttons = document.querySelectorAll('.button');

    // Loop through each button
    buttons.forEach(button => {
        // Add event listener for hover (mouseover)
        button.addEventListener('mouseover', function () {
            this.querySelector('img').classList.add('hover-rotate');
        });

        // Add event listener for when the mouse leaves (mouseout)
        button.addEventListener('mouseout', function () {
            this.querySelector('img').classList.remove('hover-rotate');
        });
    });
}

buttonAnimation();


function P2playButton(){

    const video = document.getElementById('video');
    const playButton = document.getElementById('playButton');
    
    // Show play button at the start
    playButton.classList.remove('hidden');
    
    playButton.addEventListener('click', () => {
        // Play the video and hide the play button
        video.play();
        video.muted = false; // Unmute the video
        video.requestFullscreen(); // Request fullscreen
        playButton.classList.add('hidden');
    });
    
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            video.muted = false;
            video.requestFullscreen(); // Request fullscreen
            playButton.classList.add('hidden');
        } else {
            video.pause();
            playButton.classList.remove('hidden');
        }
    });
    
}
P2playButton();

function hoverGif() {


    // var hover = document.querySelector(".paraNbuttons")
    // var hoverImg = document.querySelector(".paraNbuttons img")

    // hover.addEventListener("mouseenter",function(){
    //     hoverImg.style.opacity = 1
    // })
    var hoverImg = document.querySelectorAll(".p7c-right")

    hoverImg.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            // console.log(elem.getBoundingClientRect())
            gsap.to(elem.childNodes[1], {
                x: dets.x - elem.getBoundingClientRect().x,
                y: dets.y - elem.getBoundingClientRect().y
            })


        })
    })

}

hoverGif();
