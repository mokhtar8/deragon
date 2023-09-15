function getdata() {

  const numinput = document.getElementById("inputnumber");
   const imagepokemon = document.getElementById("pokemonimage");
   const textpok = document.getElementById("text");
   fetch(`https://pokeapi.co/api/v2/pokemon-form`)
     .then(res => res.json())
     .then(data => {
       console.log(data)
 
      
       
       
       textpok.innerHTML = response.data.name;
       imagepokemon.innerHTML = response.data.sprites.front_default
 
     })
     .catch(error => console.log(error))
 
 }
 getdata();