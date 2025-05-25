export const animationVariants =  {
    blur: { filter: "blur(2px)", opacity: 0, y: 50},
    unblur: { filter: "blur(0px)", opacity: 1, y: 0},
    fadeIn: { opacity: 1 },
    fadeOut: { opacity: 0 },
    jumpIn: { scale: 1, opacity: 1 },
    jumpOut: { scale: 0, opacity: 0 },
    transitions: { duration: 1 }
}