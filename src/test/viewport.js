import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport' // use with modern build toolchain
import { stars } from './stars'
import * as target from './target'

const WORLD_WIDTH = 2000
const WORLD_HEIGHT = 2000
const STAR_SIZE = 30
const BORDER = 10

let viewport

export function create() {
    viewport = new Viewport({
        worldWidth: WORLD_WIDTH,                        // world width used by viewport (automatically calculated based on container width)
        worldHeight: WORLD_HEIGHT,                      // world height used by viewport (automatically calculated based on container height)
        // threshold: 5,                                // number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
        // passiveWheel: true,                          // whether the 'wheel' event is set to passive (note: if false, e.preventDefault() will be called when wheel is used over the viewport)
        // stopPropagation: false,                      // whether to stopPropagation of events that impact the viewport (except wheel events, see options.passiveWheel)
        // forceHitArea: null,                          // change the default hitArea from world size to a new value
        // noTicker: false,                             // set this if you want to manually call update() function on each frame
        // ticker: PIXI.Ticker.shared,                  // use this PIXI.ticker for updates
        // interaction: renderer.plugins.interaction,   // InteractionManager, available from instantiated WebGLRenderer/CanvasRenderer.plugins.interaction - used to calculate pointer position relative to canvas location on screen
        // divWheel: null,                              // div to attach the wheel event (uses document.body as default)
        // disableOnContextMenu: false,                 // remove oncontextmenu=() => {} from the divWheel element
    })

    viewport
        .drag()
        .decelerate()
        .pinch()
        .wheel()
    // create elements
    stars(viewport, STAR_SIZE, BORDER)
    target.setup(viewport)
    border(viewport, BORDER)

    // fit and center the world into the panel
    viewport.fit()
    viewport.moveCenter(WORLD_WIDTH / 2, WORLD_HEIGHT / 2)
}

function border(viewport) {
    const line = viewport.addChild(new PIXI.Graphics())
    line.lineStyle(10, 0xff0000).drawRect(0, 0, viewport.worldWidth, viewport.worldHeight)
}

export function get() {
    return viewport
}