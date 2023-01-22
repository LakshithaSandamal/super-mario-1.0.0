export default class Screen{
    #canvas;
    #ctx;
    constructor(parentElementId){
        this.#canvas = document.createElement('canvas');
        this.#ctx = this.#canvas.getContext('2d');
        this.#canvas.width = 640;
        this.#canvas.height = 640;
        document.getElementById(parentElementId).append(this.#canvas);
    }
    getContext(){
        return this.#ctx;
    }
    clear(){
        this.#ctx.clearRect(0,0,this.#canvas.width,this.#canvas.height);
    }
}