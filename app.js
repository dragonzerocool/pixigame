let app = new PIXI.Application({
    width: 750,         // default: 800
    height: 750,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
});

document.body.appendChild(app.view);

PIXI.Loader.add([
    "assets/background-black.png",
    "assets/pixel_laser_blue.png",
    "assets/pixel_laser_green.png",
    "assets/pixel_laser_red.png",
    "assets/pixel_laser_yellow.png",
    "assets/pixel_ship_blue_small.png",
    "assets/pixel_ship_green_small.png",
    "assets/pixel_ship_red_small.png",
    "assets/pixel_ship_yellow.png"
]).load(setup);



function setup() {
    let player = new PIXI.sprite(PIXI.loader.resources["assets/pixel_ship_yellow.png"].texture);
    app.stage.addChild(player);   
}