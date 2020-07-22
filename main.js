var numbers = document.getElementsByClassName('numbers');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = typedNumber;
}

var operators = document.getElementsByClassName('operators');
for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = typedOperator;  
}

var chosenOperator = '';
var newValue = '';
var oldValue = '';

function typedNumber(event) {
  var typedValue = event.target.attributes.value.nodeValue;
  updatescreen(`${newValue}${typedValue}`);
}

function typedOperator(event) {
  var selectedOperator = event.target.attributes.value.nodeValue;  
  rotateAction(selectedOperator);
}

function updatescreen(value){
  var screen = document.getElementById('screen');
  newValue = value;
  screen.innerText = newValue;
}

function rotateAction(operator) {
  if(operator === '='){ 
    var result;

    switch (chosenOperator) {
      case '+':
        result = Number(oldValue) + Number(newValue);
        break;
      case '-':
        result = Number(oldValue) - Number(newValue);
        break;
      case '*':
        result = Number(oldValue) * Number(newValue);
        break;
      case '/':
        result = Number(oldValue) / Number(newValue);
        break;
    }
    
    updatescreen(result);

  }else{

    if (operator === 'toClian') {
      updatescreen("");
    }

    if (operator === 'toClianAll') {
      location.reload;
    }

    oldValue = newValue;
    updatescreen("");
    chosenOperator = operator;
  }

}
