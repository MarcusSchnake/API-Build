const baseURL='https://pokeapi.co/api/v2/pokedex/';
let url;

const pokemonName = document.querySelector('.name');
const pokemonGeneration = document.querySelector('generation');
const pokemonEffect = document.querySelector('effect');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');


async function fetchPokemon(){
    const response = await fetch(baseURL);
    console.log(response);
    const json = await response.json();
    displayPokemon(json)
}

let displayPokemon = (data) => { 
    let pokePies = data.results
    console.log(pokePies)
}
fetchPokemon();



