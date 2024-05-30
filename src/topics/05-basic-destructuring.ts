
interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
const song = 'New song'

// const {} = audioPlayer;
// console.log('Song: ', audioPlayer.song);
// console.log('Author: ', audioPlayer.details.author);
// console.log('Duration: ', audioPlayer.songDuration);
// //esto no esta destructurado
// const {
//     song:anotherSong,
//     songDuration:duration,
//     details
//     } = audioPlayer;

// const {author, year} = details

// console.log('Song: ', anotherSong);
// console.log('Song: ', song);
// console.log('Duration: ', duration);
// console.log('Author: ', author);
// console.log('Year: ', year);



/*destructuracion de arreglos */

const dbz: string[] = ['Goku','Vegeta', 'Trunk'];
// const trunk = dbz[3]|| 'No hay personaje'

// console.error('Personaje 3: ', dbz[3]||'Personaje no encontrado');
// console.error('Personaje 3: ', trunk);
// //esto sin destructurar

// const [p1, p2, trunk]: string[] = ['Goku','Vegeta', 'Trunk'];
// const [, , trunk]: string[] = ['Goku','Vegeta', 'Trunk'];
const [, , trunk = 'Not Found']: string[] = ['Goku','Vegeta'];

console.log('Trunk :', trunk);

export{}