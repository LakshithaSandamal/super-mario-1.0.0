export default class Sprite{
    static #instance;
    #sprite;
    constructor(){
        if(Sprite.#instance){
            return Sprite.#instance;
        }
        this.#sprite = new Map();
        return Sprite.#instance = this;
    }
    hasSprite(name){
        return this.#sprite.has(name);
    }
    setSprite(name,sheet){
        this.#sprite.set(name,sheet);
    }
    getSprite(name){
        return this.#sprite.get(name);
    }
}