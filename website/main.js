class GameEngine {
    perentHtmlElement;
    //canvas width
    width;
    //canvas height
    height;
    //use Value to pause the main loop
    isRunning = false;
    //time betwen frames
    DeltaTime = 0;

    context;
    canvas;

    gameObjects = new Array();

    constructor(HtmlElement, width, height) {
        this.perentHtmlElement = HtmlElement;
        this.width = width;
        this.height = height;
    }

    init() {
        this.perentHtmlElement.innerHTML = '<canvas id="canvas" style="background-color: #aaaaaa" width="' + this.width + '" height="' + this.height + '"></canvas>'
        this.tick();
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext("2d");

    }
    //main Tick
    tick() {
        var oldTime = Date.now();
        setInterval(() => {
            if (this.isRunning) {
                this.DeltaTime = (Date.now() - oldTime) / 1000;
                this.update();
                this.render();

                oldTime = Date.now();
            }
        });
    }
    //TODO=> gameObject rendering
    render() {
        for (var i = 0; i < this.gameObjects.length; i++) {
            if (this.gameObjects[i].imgPath == null) {
                this.context.fillRect(this.gameObjects[i].posX, this.canvas.height - this.gameObjects[i].posY - this.gameObjects[i].height, this.gameObjects[i].width * this.gameObjects[i].scaleX, this.gameObjects[i].height * this.gameObjects[i].scaleY);
            } else {
                let img = new Image();
                img.src = this.gameObjects[i].imgPath;

            }
        }
    }

    //updating each GameObject
    update() {

        for (var i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].update();
        }
    }

}

//GameObject structure = (posX:number,posY:number,imgPath:string,update:function)
class GameObject {
    imgPath = "";
    scaleX = 1;
    scaleY = 1;
    posX = 0;
    posY = 0;
    width;
    height;
    layer = 0;

    update = new Function();

    constructor(posX, posY, width, height, imgPath, update) {
        this.posX = posX;
        this.posY = posY;
        this.height = height;
        this.width = width;
        this.imgPath = imgPath;
        this.update = update;
    }

}

ge = new GameEngine(document.body, 500, 500);

ge.init();

function update() {
    console.log("test")
}

gm = new GameObject(0, 0, 50, 50, null, update);
ge.gameObjects.push(gm);
