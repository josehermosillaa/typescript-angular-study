/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name:string;
    age:number;
    // address:any;
    address:Addres
    showAddress:()=>string;

}
//lo recomendado es hacer otra interfaz para address
interface Addres{
        sreet:string;
        country:string;
        city:string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        sreet: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};