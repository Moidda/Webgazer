class Rectangle {
    constructor(id, x, y, width, height, color = color(255, 255, 255)) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.firstGazeTime = -1;
        this.lookDelay = 1000;
    }

    show() {
        if(this.isStaredAt()) {
            if(this.firstGazeTime === -1) {
                this.firstGazeTime = JSON.parse(JSON.stringify(gazeTime));
            }
        }
        else {
            this.firstGazeTime = -1;
        }

        if(this.firstGazeTime!==-1 && gazeTime-this.firstGazeTime >= this.lookDelay) 
            fill(255, 255, 255);
        else 
            fill(this.color);
            
        rect(this.x, this.y, this.width, this.height);
    }

    updatePos(x, y) {
        this.x = x;
        this.y = y;
    }

    updateColor(color) {
        this.color = color;
    }

    isStaredAt() {
        if(!gazeData) return false;
        
        var x1 = this.x;
        var y1 = this.y;
        var x2 = this.x + this.width;
        var y2 = this.y + this.height;

        return (x1<=gazeData.x && gazeData.x<=x2 && y1<=gazeData.y && gazeData.y<=y2); 
    }
}