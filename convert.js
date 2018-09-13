// conersions cards

let unitType = document.querySelector('#unit'); // select list item
let cards = document.getElementById('output'); // card which displays conversions
    cards.style.visibility = 'hidden'; // cards hidden before input

const weightInput = document.getElementById('weightInput');

// Changes placeholder text on input field
unitType.addEventListener('change', () => {
    weightInput.placeholder =  `Enter ${unitType.value}...`
    cards.style.visibility = 'hidden';
    weightInput.value = ''; // clear input onchange when input has data
    resetCards(); // set cards to original 
});

weightInput.addEventListener('input', (e) => {
    if(weightInput.value != ''){

        if(unitType.value === 'pounds'){
            poundsConversion();
        }
        else if(unitType.value === 'grams'){
            gramsConversion();
    }
        else if(unitType.value === 'kilograms'){
            killosConversion();
        }
        else if(unitType.value === 'ounces'){
            ouncesConversion();
        }
        cards.style.visibility = 'visible'
    }
    else{
        cards.style.visibility = 'hidden';
    }

});

function poundsConversion(e){
    // Do calculations 
    cards.style.visibility = 'visible'; 
      document.getElementById('gramsOutput').innerHTML = `${(weightInput.value / 0.0022046).toFixed(2)} g` ; // Grams
       document.getElementById('kiloOutput').innerHTML = `${(weightInput.value / 2.2046).toFixed(2)} kg`; // Killograms
        document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 16).toFixed(2)} oz`; // ounces
    }

function gramsConversion(e){
   cards.style.visibility = 'visible'; 
   console.log(document.getElementById('unit1').innerHTML);
   document.getElementById('unit1').innerHTML = 'Pounds:'; // swap grams for pounds
    document.getElementById('gramsOutput').innerHTML = `${(weightInput.value  * 0.0022046).toFixed(2)} lbs` ; // pounds
     document.getElementById('kiloOutput').innerHTML = `${(weightInput.value  / 1000.0).toFixed(2)} kg`; // Killograms
      document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 0.035274).toFixed(2)}oz`; // ounces
} 

function killosConversion(e){
    cards.style.visibility = 'visible'; 
    console.log(document.getElementById('unit2').innerHTML);
    document.getElementById('gramsOutput').innerHTML = `${(weightInput.value / 0.0010000).toFixed(2)} g` ; // Grams
    document.getElementById('unit2').innerHTML = 'Pounds'; // swap kilos for pounds
     document.getElementById('kiloOutput').innerHTML = `${(weightInput.value *  2.2046).toFixed(2)} lbs`; // pounds
      document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 35.274).toFixed(2)} oz`; // ounces
} 

function ouncesConversion(e){
    cards.style.visibility = 'visible'; 
    document.getElementById('gramsOutput').innerHTML = `${(weightInput.value / 0.035274).toFixed(2)} g` ; // Grams
     document.getElementById('kiloOutput').innerHTML = `${(weightInput.value / 35.274).toFixed(2)} kg`; // Killograms
     document.getElementById('unit3').innerHTML = 'Pounds'; // swap ounces for pounds
      document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 0.062500).toFixed(2)} lbs`; // pounds
} 

function resetCards(){
    cards.innerHTML = `
    <div class="card mb-3">
    <div class="card-body">
        <h4>
            <span id="unit1">Grams: </span>
            <span id="gramsOutput"></span>
        </h4>
    </div>
</div>
<div class="card mb-3">
    <div class="card-body">
        <h4> 
            <span id="unit2">Killograms: </span> 
            <span id="kiloOutput"></span>
        </h4>
    </div>
</div>
<div class="card mb-3">
    <div class="card-body">
        <h4>
            <span id='unit3'>Ounces: </span>
            <span id="ouncesOutput"></span>
        </h4>
    </div>
</div>`;
}