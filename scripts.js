const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

const pokemonName = document.querySelector('.name');
const pokemonGeneration = document.querySelector('generation');
const pokemonEffect = document.querySelector('effect');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');


async function fetchPokemon() {
    [...Array(6)].map(async (el, idx) => {
        const randNum = Math.floor(Math.random() * (101 - 2) + 2)
        const response = await fetch(`${baseURL}${idx + randNum}`);
        console.log(response);
        const json = await response.json();
        displayPokemon(json)
        console.log(json)
    })


}

const displayPokemon = (data) => {
    let pokePies = data
    console.log(pokePies?.sprites?.front_shiny)
    console.log(data);
}
fetchPokemon();





