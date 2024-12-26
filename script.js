gsap.from(".line h1",{
    y:150,
    stagger:0.1,
    duration:0.4,
    delay:0.3,
})

let h5 = document.querySelector('.line1-part-1 h5');
let grow = 0

 setInterval(function(){
    if(grow<100){
        h5.textContent = grow++
    }else{
         h5.textContent = grow
    }
 },35)