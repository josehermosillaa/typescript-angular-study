
function addNumbers(a:number,b:number){
    return a + b
}

const addNumbersArrow = (a:number,b:number):string=>{
    return `${a + b}`
}
// (a:number,b:number):number **tipo de dato salida=>{
//     return a + b
// }

function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base
}

addNumbers(1,2)
// const result = addNumbers(1,2)
// const result2 = addNumbersArrow(3,4)
// const result3 = multiply(5)

// console.log({result})
// console.log({result2})
// console.log({result3})

// console.log({result, result2, result3})
/*FUNCIONES CON OBJETOS COMO ARGUMENTOS */
interface Character{
    name:string;
    hp: number;
    showHP:()=>void; //puedo regresar nada con void

}

const healCharacter = (character:Character, amount:number )=>{
    
    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHP(){
        console.log(`Puntos de vida ${this.hp}`);
    }

}

healCharacter(strider, 10)
healCharacter(strider, 30)
healCharacter(strider, 30)
strider.showHP();

export {};

