//si no va cambiar lo dejamo como constante
// las constantes son mas ligeras que las variables, ya que no tienen operaciones de asignacion

// const skills: string[] = ['Bash', 'Counter','Healing']

//no puedo definir como arriba el tipo de dato en este objeto
// por lo que necesitamos  una interfaz
interface Character{
    name:string;
    hp: number;
    skills: string[];
    hometown?:string;
}
// con el ? puedoi obviar poner hometown
// si yo coloco     hometown:string|undefined; estoy obligado a pasar el hometown aunque sea como undefined
const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    // hometown: ""// pero yo no lo quiero asi que ponemos ? en hometown
}

strider.hometown = 'Rivendell';

console.table(strider)


export{};
