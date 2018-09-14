// JS for weight conversions 

let unitType = document.querySelector('#unit'); // <select> list item
let cards = document.getElementById('output'); // card which displays conversions
    cards.style.visibility = 'hidden'; // hides cards before input

const weightInput = document.getElementById('weightInput'); // input field

// Changes placeholder and runs conversions if input field  had a number

unitType.addEventListener('change', () => {
    weightInput.placeholder =  `Enter ${unitType.value}...`
    cards.style.visibility = 'hidden';
    resetCards(); // Resets cards to original 
    if(weightInput.value != ''){
        computeWeight(); // Runs conversions  
    }
});

weightInput.addEventListener('input', computeWeight);

function computeWeight(){
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

};

// Functions for weight conversions

function poundsConversion(){
    // Do calculations 
    cards.style.visibility = 'visible'; 
      document.getElementById('gramsOutput').innerHTML = `${(weightInput.value / 0.0022046).toFixed(2)} g` ; // Grams
       document.getElementById('kiloOutput').innerHTML = `${(weightInput.value / 2.2046).toFixed(2)} kg`; // Killograms
        document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 16).toFixed(2)} oz`; // ounces
    }

function gramsConversion(){
   cards.style.visibility = 'visible'; 
   document.getElementById('unit1').innerHTML = 'Pounds:'; // swap grams for pounds
    document.getElementById('gramsOutput').innerHTML = `${(weightInput.value  * 0.0022046).toFixed(2)} lbs` ; // pounds
     document.getElementById('kiloOutput').innerHTML = `${(weightInput.value  / 1000.0).toFixed(2)} kg`; // Killograms
      document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 0.035274).toFixed(2)}oz`; // ounces
} 

function killosConversion(){
    cards.style.visibility = 'visible'; 
    document.getElementById('gramsOutput').innerHTML = `${(weightInput.value / 0.0010000).toFixed(2)} g` ; // Grams
    document.getElementById('unit2').innerHTML = 'Pounds'; // swap kilos for pounds
     document.getElementById('kiloOutput').innerHTML = `${(weightInput.value *  2.2046).toFixed(2)} lbs`; // pounds
      document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 35.274).toFixed(2)} oz`; // ounces
} 

function ouncesConversion(){
    cards.style.visibility = 'visible'; 
    document.getElementById('gramsOutput').innerHTML = `${(weightInput.value / 0.035274).toFixed(2)} g` ; // Grams
     document.getElementById('kiloOutput').innerHTML = `${(weightInput.value / 35.274).toFixed(2)} kg`; // Killograms
     document.getElementById('unit3').innerHTML = 'Pounds'; // swap ounces for pounds
      document.getElementById('ouncesOutput').innerHTML = `${(weightInput.value  * 0.062500).toFixed(2)} lbs`; // pounds
} 

// Original templete for cards

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
};