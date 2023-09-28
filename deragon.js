var img = document.getElementById("pokemonimage");


function calll() {

  var number = document.getElementById('inputnumber');
  var numbers = number.value;


  fetch(`https://pokeapi.co/api/v2/pokemon/${numbers}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      img.src = data.sprites.front_default;
      document.getElementById("text").innerHTML = data.name;



      document.getElementById("imgpok").src =data.sprites.other["official-artwork"].front_default;
     document.getElementById("number").innerHTML = '00'+ data.id;
      document.getElementById("textbulb").innerHTML = data.name;
      document.getElementById("wartype").innerHTML = data.types[0].type.name;
      document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("height").innerHTML = data.height;
      caller ()
   
    })
    .catch(error => console.log(error));


  number.addEventListener('input', function () {

    let userInput = parseInt(number.value);

    if (userInput < 1) {
      alert('عددی بین 1 تا 20 را وارد کنید')
      userInput = '';
    } else if (userInput > 20) {
      alert('عددی بین 1 تا 20 را وارد کنید')
      userInput = '';
    }

    number.value = userInput;
  });



}



function caller () {

  var number = document.getElementById('inputnumber');
  var numbers = number.value;


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
var box = document.getElementById("changer")
open.addEventListener('click', function()  {

  if(box.style.display == "none") {
    box.style.display = 'block';
  } else {
    
    
    box.style.display = 'none';
    
  }

});