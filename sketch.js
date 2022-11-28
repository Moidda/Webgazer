var regionWidth, regionHeight;
var regions = [];


/**
 * the screen is divided into 6 regions, with 2 rows on screen and 
 * 3 regions per row. The top left region is numbered 0, and the 
 * bottom right region is numbered 5
 */
function getRegionPosition(index) {
    var x = (index%3)*regionWidth;
    var y = (index < 3) ? 0 : regionHeight;
    return [x, y];
}


function getRegionColor(index) {
    if(index === 0) return color(153, 204, 255);
    if(index === 1) return color(153, 51, 51);
    if(index === 2) return color(255, 255, 102);
    if(index === 3) return color(255, 204, 204);
    if(index === 4) return color(102, 102, 255);
    if(index === 5) return color(255, 102, 102);
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    regionHeight = windowHeight/2;
    regionWidth = windowWidth/3;

    for(var i = 0; i < 6; i++) {
        const [x, y] = getRegionPosition(i);
        regions[i] = new Rectangle(i, x, y, regionWidth, regionHeight, getRegionColor(i));
    }
}


function draw() {
    background(255, 255, 255);

    for(var i = 0; i < 6; i++) {
        regions[i].show();
    }
}
