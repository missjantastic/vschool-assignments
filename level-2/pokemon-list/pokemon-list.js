const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONData = xhr.responseText;
        const pokemonData = JSON.parse(JSONData);
        createPokemonList(pokemonData);
    }
}

function createPokemonList(data){
    const pokemonList = data.objects[0].pokemon;
    pokemonList.forEach(element => {
        const h1 = document.createElement('h1');
        h1.textContent = element.name;
        document.body.appendChild(h1);
    });
}