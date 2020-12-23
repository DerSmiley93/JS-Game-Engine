class Gameengine {
    perentHtmlElement;
    width;
    height;
    isRunning = false;
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

    render(){

    }

    update(){
        console.log(this.DeltaTime)
    }

}


test = new Gameengine(document.body,200,200);


test.init();
test.isRunning = true;
