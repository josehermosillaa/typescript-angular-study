


export class Person{
    // public name:string ;
    // private address:string;

    constructor(
        public firstName:string,
        public lastName:string,
        private address:string = 'No address'
    ){}
}

export class Hero{

    // public person: Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
        public person:Person,
    ){
        // this.person = new Person(realName)
    }

}

const tony = new Person('Tony', 'Stark', 'New York');

const ironman = new Hero('Ironman', 45,'Tony', tony);



// export class Hero extends Person {

//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName: string,
//     ){
//         super(realName, 'New York');
//     }

// }




// const ironman = new Person('Ironman', 'New York');
// const ironman = new Hero('Ironman', 45,'Tony', tony);


// console.log(ironman.address) // esto no se puede hacer pero compila a js por lo que igual lo muestra
/* en angular se puede poner para que no compile cuando haya estos errores*/
console.log(ironman)





//el constructor de una clase, es el primer metodo que se ejecuta cuando llamamos a una clase
//constructor antes

// export class Person{
//     public name:string ;
//     private address:string;

//     constructor(){
//         this.name = 'Fernando';
//         this.address = 'New York';
//     }
// }

//esto es raro hacerlo en typescrip
// export class Person{
//     public name:string ;
//     private address:string;

//     constructor(name:string, address:string){
//         this.name = name;
//         this.address = address;
//     }
// }
