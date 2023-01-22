import Screen from "./Screen.js";
import { loadSprite } from "./function.js";
import Sprite from "./Sprite.js";

await loadSprite('/assets');
const sheet = new Sprite();
const screen_01 = new Screen('screen-01').getContext();
screen_01.drawImage(sheet.getSprite('floor-1'),0,0);
screen_01.drawImage(sheet.getSprite('sky-1'),20,20);