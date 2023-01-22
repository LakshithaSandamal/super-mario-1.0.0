import Sprite from "./Sprite.js";

export const loadSprite = async(route)=>{
    const assets = await loadData(route);
    const playground_sprites = await Promise.all(assets.playgroundSprite.map(async({sheet})=> await createSheet(sheet)));
    const spriteSheet = new Sprite();
    assets.playgroundSprite.forEach((sprite,index) => {
        sprite.sheetData.forEach(sheet=>{
            sheet.tiles.forEach(tile=>{
                const canvas = document.createElement('canvas');
                canvas.width = sheet.size.width;
                canvas.height = sheet.size.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(playground_sprites[index],16*(tile.position.x-1),16*(tile.position.y-1),sheet.size.width,sheet.size.height,0,0,sheet.size.width,sheet.size.height);
                spriteSheet.setSprite(tile.name,canvas);
            })
        })
    });
}
export const createSheet = async(data)=>{
    const img = new Image();
    img.src = data;
    await img.decode();
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img,0,0);
    return canvas;
}
export const loadData = async(route)=>{
    return await (await fetch(route)).json();
}