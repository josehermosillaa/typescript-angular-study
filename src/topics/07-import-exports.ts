import {Product,taxCalculation } from './06-function-destructuring'

const shopingCart:Product[]= [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
] ;

//tax 150

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shopingCart,
});

console.log('Total', total);
console.log('Tax', tax);