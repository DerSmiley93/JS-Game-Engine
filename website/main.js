class GameEngine {
    perentHtmlElement;
    //canvas width
    width;
    //canvas height
    height;
    isRunning = false;
    //time betwen frames
    DeltaTime  = 0;

    GameObjects = new Array();

    constructor(HtmlElement, width, height) {
        this.perentHtmlElement = HtmlElement;
        this.width = width;
        this.height = height;
    }
    
    init() {
        this.perentHtmlElement.innerHTML = '<canvas width="' + this.width + '" height="' + this.height + '"></canvas>'
        this.tick()
    }
    //main Tick
    tick(){
        var oldTime = Date.now();
        setInterval(() => {
            if(this.isRunning){
                this.DeltaTime =  (Date.now() - oldTime) / 1000;
                this.update();
                this.render();

                oldTime = Date.now();
                }
        });
    }
    //TODO=> gameObject rendering
    render(){

    }
    //TODO=> gameObject Update
    update(){
    }

}

//GameObject structure = (posX:number,posY:number,imgPath:string,update:function)
class GameObject{
    imgPath = "";
    scaleX = 1;
    scaleY = 1;
    posX = 0;
    posY = 0;
    layer = 0;

    update = new Function();

    constructor(posX, posY, imgPath, update){
        this.posX = posX;
        this.posY = posY;
        this.imgPath = imgPath;
        this.update = update;
    }

}

ge = new Gameengine(document.body,200,200);

ge.init();
