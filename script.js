var timeline = gsap.timeline();

timeline.from(".left-side nav", {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 1
});

timeline.from(".left-side .text-container", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.5
});
timeline.from(".left-side .text-container p", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.5
});

timeline.from(".right-side .right-top", {
    opacity: 0,
    x: 300,
    duration: 1,
    stagger: 0.5
});
timeline.from(".right-side .right-bottom", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.5
});
