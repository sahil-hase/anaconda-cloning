
var menubutton = document.querySelector('.Sahil');
var Nav2 = document.querySelector('.nav2');


menubutton.addEventListener("click", function () {
    Nav2.classList.toggle('dropdown');
})

var tl = gsap.timeline();

tl.from('.nav1 i ', {
    x: -50,
    duration: 0.5,
    delay: 0.3,
    opacity: 0
})


tl.from('.nav1 h3 ', {
    y: -50,
    duration: 0.2,
    delay: 0.1,
    opacity: 0
})


tl.from('.nav2 a ', {
    duration: 0.5,
    delay: 0.1,
    opacity: 0,
    stagger: 0.2,
    scale: 0
})

tl.from('.nav3 button', {
    x: -50,
    duration: 0.2,
    delay: 0.1,
    opacity: 0,
    stagger: 0.3
})

tl.from('.main-content', {
    y: -50,
    duration: 0.2,
    delay: 0.1,
    opacity: 0
})

tl.from('.lower-lower-content', {
    scale:0,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        Trigger: '.lower-lower-content',
        scroller: 'body',
        // markers: true,
        start:"900px 400px",
        end:"600px 100px",
        scrub: 2
    }
})
tl.from('.third-main-left-div', {
    x:-50,
    opacity: 0,
    duration: 2,
    delay:0.5,
    scrollTrigger: {
        Trigger: '.third-main-left-div',
        scroller: 'body',
        // markers: true,
        start:"1500px 300px",
        end:"900px 200px",
        scrub: 2
    }
})

tl.from('.right-conda-div',{
    scale:0,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        Trigger:'.right-conda-div',
        scroller:'body',
        // markers:true,
        start:"1800px 200px",
        end:"400px 200px",
        scrub: 2
    }
})

tl.from('.left-class-div',{
    y:100,
    opacity:0,
    duration:4,
    delay:0.5,
    scrollTrigger:{
        Trigger:'.left-class-div',
        scroller:'body',
        // markers:true,
        start:"2300px 200px",
        end:"400px 200px",
        scrub: 2
    }
})

tl.from('.right-cloud-div',{
    scale:0,
    opacity:0,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        Trigger:'.right-cloud-div',
        scroller:'body',
        // markers:true,
        start:"3000px 300px",
        end:"400px 100px",
        scrub: 2
    }
})  

tl.from('.package2',{
    x:50,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:1,
    scrollTrigger:{
        Trigger:'.package2',
        scroller:'body',
        // markers:true,
        start:"3700px 300px",
        end:"400px 100px",
        scrub: 2
    }
})

tl.from('.package3',{
    x:-50,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:1,
    scrollTrigger:{
        Trigger:'.package2',
        scroller:'body',
        // markers:true,
        start:"4600px 800px",
        end:"400px 100px",
        scrub: 2
    }
})

tl.from('.left-second',{
    x:-50,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:1,
    scrollTrigger:{
        Trigger:'.left-second',
        scroller:'body',
        // markers:true,
        start:"5500px 800px",
        end:"400px 100px",
        scrub: 2
    }
})


tl.from('.right-second',{
    x:50,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:1,
    scrollTrigger:{
        Trigger:'.right-second',
        scroller:'body',
        // markers:true,
        start:"5500px 800px",
        end:"400px 100px",
        scrub: 2
    }
})







