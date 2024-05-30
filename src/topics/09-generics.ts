export function whatsMyType<T>(argument:T):T{


    return argument
}

//intentar no usar any, quita toda restriccion de typescrip sobre el dato


const amIString = whatsMyType<string>('Hola Mundo') // con esa definicion de generico fuerzo el valor
let amINumber = whatsMyType<number>(100)
let amIArray = whatsMyType<number[]>([1,2,3,4,5])

console.log(amIString.split(''))
//no recibimos ayuda del intelisense
//los genericos asumen el tipo de dato desde el argumento
//sintaxis extraña <T> -> T, primer generico