gsap.registerPlugin(ScrollTrigger);

let st = gsap.timeline({
  scrollTrigger: { trigger: '.mug' },
  start: 'top center',
  ease: 'power4.inOut',
  scrub: 1,
});

let tl = gsap.timeline({
  defaults: { ease: 'power4.inOut', duration: 2 },
});

tl.to('.main-text', {
  'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  opacity: 1,
  y: 0,
  duration: 2.2,
});

st.from('.mug', { x: 200, opacity: 0, duration: 1.5 })
  .to(
    '.text',
    {
      'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
      y: 0,
      duration: 1,
    },
    '-=0.5'
  )
  .to('.text2', {
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    opacity: 1,
    y: 0,
    duration: 1,
  });
