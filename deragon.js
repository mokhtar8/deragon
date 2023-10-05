var img = document.getElementById("pokemonimage");
var numberforinput = document.getElementById('inputnumber');

numberforinput.addEventListener('input', function () {
var numbers = numberforinput.value;
  let userInput = parseFloat(numberforinput.value);

  if (userInput < 1 ||userInput > 20) {
    alert('عددی بین 1 تا 20 را وارد کنید')
    numberforinput.value = '';
  } else {
    designcall(numbers)
  }
});
function designcall(numbers) {

  fetch(`https://pokeapi.co/api/v2/pokemon/${numbers}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      img.src = data.sprites.front_default;
      document.getElementById("text").innerHTML = data.name;

      document.getElementById("deraonimage2").src =data.sprites.other["official-artwork"].front_default;
     document.getElementById("number").innerHTML = '00'+ data.id;
      document.getElementById("textbulb").innerHTML = data.name;
      document.getElementById("wartype").innerHTML = data.types[0].type.name;
      document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("height").innerHTML = data.height;
      caller (numbers)
   
    })
    .catch(error => console.log(error));
}
function caller (numbers) {

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${numbers}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      document.getElementById("gender").innerHTML = data.genera[7].genus;
      document.getElementById("color").innerHTML = data.color.name;
    })
    .catch(error => console.log(error));
}

//change diplay// 

var open = document.getElementById("mylink");
var box = document.getElementById("bodychanger")
open.addEventListener('click', function()  {

  if(box.style.display == "none") {
    box.style.display = 'block';
  } else {
    
    box.style.display = 'none';
  }
});