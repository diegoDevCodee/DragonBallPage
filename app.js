setTimeout(function () {
  document.getElementById("loading-page").className += "loaded";
  document.getElementById("loader").className += "opzero";
  document.getElementById("lastray").className += "finalray";
  document.body.className += "whitebk";
}, 6500);

//?========>>>* BACKGROUND IMAGE*<<<========//
gsap.to("#bg", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.5,
});
//?========>>>* MAIN CHARACTER IMAGE *<<<========//
gsap.to("#man", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 0.5,
});
//?========>>>* CLOUD RIGTH *<<<========//
gsap.to("#clouds_1", {
  scrollTrigger: {
    scrub: 1,
  },
  x: 200,
});
//?========>>>* CLOUD LEFT *<<<========//
gsap.to("#clouds_2", {
  scrollTrigger: {
    scrub: 1,
  },
  x: -200,
});
//?========>>>* MAIN TEXT *<<<========//
gsap.to("#text", {
  scrollTrigger: {
    scrub: 2,
  },
  y: 500,
});
