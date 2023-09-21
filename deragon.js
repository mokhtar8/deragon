  var img =document.getElementById("pokemonimage");

function calll (){

var number = document.getElementById('inputnumber');
var numbers = number.value;


    fetch (`https://pokeapi.co/api/v2/pokemon/${numbers}`)
      .then(response => response.json())
      .then(data => {  console.log(data)
        number.data;
        img.src =data.sprites.front_default;
        document.getElementById("text").innerHTML = data.name;
      })
      .catch(error => console.log(error));
      
      if (numbers < 1 || numbers > 20) {
        alert("عدد شما باید بین 1 تا 20 باشد");
      number.value = '';
    }
   
      }

   


