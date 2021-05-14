import Renderer from './renderer';

const renderer = new Renderer();

renderer.start();
renderer.target.start()  // starts the target moving
renderer.viewport.follow(renderer.target.target, {
  speed: 0,           // speed to follow in pixels/frame (0=teleport to location)
  acceleration: null, // set acceleration to accelerate and decelerate at this rate; speed cannot be 0 to use acceleration
  radius: null,       // radius (in world coordinates) of center circle where movement is allowed without moving the viewport
})

// viewport.bounce({
  //     sides: 'all',                // all, horizontal, vertical, or combination of top, bottom, right, left(e.g., 'top-bottom-right')
  //     friction: 0.5,               // friction to apply to decelerate if active
  //     time: 150,                   // time in ms to finish bounce
  //     bounceBox: null,             // use this bounceBox instead of { x: 0, y: 0, width: viewport.worldWidth, height: viewport.worldHeight }
  //     ease: 'easeInOutSine',       // ease function or name (see http://easings.net/ for supported names)
  //     underflow: 'center',         // (top/bottom/center and left/right/center, or center) where to place world if too small for screen
  // })

  // viewport.animate({
  //     time: 1000,                     // time to animate
  //     position: null,                 // position to move viewport
  //     width: null,                    // desired viewport width in world pixels (use instead of scale; aspect ratio is maintained if height is not provided)
  //     height: null,                   // desired viewport height in world pixels(use instead of scale; aspect ratio is maintained if width is not provided)
  //     scale: null,                    // scale to change zoom(scale.x = scale.y)
  //     scaleX: null,                   // independently change zoom in x - direction
  //     scaleY: null,                   // independently change zoom in y - direction
  //     ease: 'linear',                 // easing function to use
  //     callbackOnComplete: null,       // callback when animate is complete
  //     removeOnInterrupt: false,	   // removes this plugin if interrupted by any user input
  // })

  // viewport.clamp({
  //     left: false,                // whether to clamp to the left and at what value
  //     right: false,               // whether to clamp to the right and at what value
  //     top: false,                 // whether to clamp to the top and at what value
  //     bottom: false,              // whether to clamp to the bottom and at what value
  //     direction: 'all',           // (all, x, or y) using clamps of [0, viewport.worldWidth / viewport.worldHeight]; replaces left / right / top / bottom if set
  //     underflow: 'center',	       // where to place world if too small for screen (e.g., top - right, center, none, bottomleft)
  // })

  // viewport.clampZoom({
  //     minWidth: null,                 // minimum width
  //     minHeight: null,                // minimum height
  //     maxWidth: null,                 // maximum width
  //     maxHeight: null,                // maximum height
  //     minScale: null,                 // minimum scale
  //     maxScale: null,                 // minimum scale
  // })

  // target.start()  // starts the target moving
  // viewport.follow(target.get(), {
  //     speed: 0,           // speed to follow in pixels/frame (0=teleport to location)
  //     acceleration: null, // set acceleration to accelerate and decelerate at this rate; speed cannot be 0 to use acceleration
  //     radius: null,       // radius (in world coordinates) of center circle where movement is allowed without moving the viewport
  // })

  // viewport.mouseEdges({
  //     radius: null,           // distance from center of screen in screen pixels
  //     distance: 20,           // distance from all sides in screen pixels
  //     top: null,              // alternatively, set top distance (leave unset for no top scroll)
  //     bottom: null,           // alternatively, set bottom distance (leave unset for no top scroll)
  //     left: null,             // alternatively, set left distance (leave unset for no top scroll)
  //     right: null,            // alternatively, set right distance (leave unset for no top scroll)
  //     speed: 8,               // speed in pixels/frame to scroll viewport
  //     reverse: false,         // reverse direction of scroll
  //     noDecelerate: false,    // don't use decelerate plugin even if it's installed
  //     linear: false,          // if using radius, use linear movement (+/- 1, +/- 1) instead of angled movement (Math.cos(angle from center), Math.sin(angle from center))
  //     allowButtons: false,    // allows plugin to continue working even when there's a mousedown event
  // })

  // viewport.snap({
  //     topLeft: false,             // snap to the top-left of viewport instead of center
  //     friction: 0.8,              // friction/frame to apply if decelerate is active
  //     time: 1000,                 // time for snapping in ms
  //     ease: 'easeInOutSine',      // ease function or name (see http://easings.net/ for supported names)
  //     interrupt: true,            // pause snapping with any user input on the viewport
  //     removeOnComplete: false,    // removes this plugin after snapping is complete
  //     removeOnInterrupt: false,   // removes this plugin if interrupted by any user input
  //     forceStart: false,          // starts the snap immediately regardless of whether the viewport is at the desired location
  // })

  // viewport.snapZoom({
  //     width: 0,                   // the desired width to snap (to maintain aspect ratio, choose only width or height)
  //     height: 0,                  // the desired height to snap(to maintain aspect ratio, choose only width or height)
  //     time: 1000,                 // time for snapping in ms
  //     ease: 'easeInOutSine',      // ease function or name(see http://easings.net/ for supported names)
  //     center: null,               // place this point at center during zoom instead of center of the viewport
  //     interrupt: true,            // pause snapping with any user input on the viewport
  //     removeOnComplete: false,    // removes this plugin after snapping is complete
  //     removeOnInterrupt: false,   // removes this plugin if interrupted by any user input
  //     forceStart: false,          // starts the snap immediately regardless of whether the viewport is at the desired zoom
  //     noMove: false,              // zoom but do not move
  // })