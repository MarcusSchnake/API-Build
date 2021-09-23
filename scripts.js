const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const button = document.getElementById('catchButton');
const cardOne = document.getElementById('card1');
const pname = document.getElementById('pname');
const pweight = document.getElementById('pweight');
const pheight = document.getElementById('pheight');
const pokemon = document.getElementById('pokemon');



button.addEventListener('click', fetchPokemon)

//FETCH
async function fetchPokemon() {
    const randNum = Math.floor(Math.random() * (151 - 2) + 2)
    const response = await fetch(`${baseURL}${randNum}`);
    console.log(response);
    const json = await response.json();
    displayPokemon(json)
    console.log(json)
    
}
   
//DISPLAY
const displayPokemon = (data) => {
    pname.innerHTML = data.name;
    pweight.innerHTML = data.weight;
    pheight.innerHTML = data.height;
    pokemon.src = data?.sprites?.front_shiny;

    
    
  
    
}
