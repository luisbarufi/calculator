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
    oldValue = newValue;
    updatescreen("");
    chosenOperator = operator;
  }

}
