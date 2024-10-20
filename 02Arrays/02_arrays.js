const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeroes=marvel_heros.concat(dc_heros)
// console.log(allHeroes);


// spedd op

const all_new_heroes=[...marvel_heros,...dc_heros]
// console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7 , [4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name: "Abhishek"})); // intersting


let score1=100
let score2=150
let score3=200
console.log(Array.of(score1,score2,score3));