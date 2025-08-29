gsap.set(".imagecontainer", {opacity: 0, y: 40, scale: 1, x: 0, rotate: 0});
gsap.set(".text h1", {opacity: 0, y: 40, scale: 1, x: 0, rotate: 0});

const tl = gsap.timeline({repeat: -1, repeatDelay: 1});

// Nature: Fade in and slide up
tl.to(["#one", ".text h1:nth-child(1)"], {opacity: 1, y: 0, duration: 1, ease: "power2.out"})
  .to(["#one", ".text h1:nth-child(1)"], {opacity: 0, y: -40, duration: 1, ease: "power2.in"}, "+=2")

// Mountain: Scale in and rotate
  .to(["#two", ".text h1:nth-child(2)"], {opacity: 1, scale: 1.1, rotate: 5, y: 0, duration: 1, ease: "back.out(1.7)"})
  .to(["#two", ".text h1:nth-child(2)"], {opacity: 0, scale: 1, rotate: 0, y: -40, duration: 1, ease: "back.in(1.7)"}, "+=2")

// Windows: Slide in from left
  .to(["#three", ".text h1:nth-child(3)"], {opacity: 1, x: 0, y: 0, duration: 1, ease: "power4.out", 
      onStart: () => {
        gsap.set("#three", {x: -200});
        gsap.set(".text h1:nth-child(3)", {x: -200});
      }
    })
  .to(["#three", ".text h1:nth-child(3)"], {opacity: 0, x: 200, duration: 1, ease: "power4.in"}, "+=2");