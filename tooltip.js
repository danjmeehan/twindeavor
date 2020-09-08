//Tippy JS Settings

tippy('.tippy', {             // Use class or id
    animation: 'scale',         // See docs for more options (there are a few nice ones 😉)
    duration: 200,              // Duration for ToolTip Animation
    arrow: true,                // Add ToolTip Arrow
    delay: [0, 50],             // First # = delay in, second # = delay out
    arrowType: 'sharp',         // Sharp or 'round' or remove for none
    theme: 'light',             // Dark is the default
    maxWidth: 220,              // Max width in pixels for the tooltip
  })