import food from './foods';
import { choice,remove } from './helpers';

let fruit= choice(food);

console.log(`I'd like one ${fruit}, please!`);

console.log(`Here you go: ${fruit}`);

console.log('May I have another one??');

let remaining= remove(food, fruit);

console.log(`I/m sorry, we are all out. We have ${remaining.length} left!!`);