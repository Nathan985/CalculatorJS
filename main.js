function registerValue(value){
  let val = localStorage.getItem('power');
  // console.log(val);
  if(val == 'on'){
    let field = document.querySelector('#result');
    if(value == '+' || value == '-' || value == '*' || value == '/'){
      Sum();
    }
    
    if(field.textContent == '0'){
      field.textContent = value;
    }
    else{
      field.textContent += value;
    }
  }
}
  
function Sum(){
  let val = localStorage.getItem('power');
  if(val == 'on'){
    let field = document.querySelector('#result');
    let fieldRes = document.querySelector('#count');
    fieldRes.textContent = eval(field.textContent);
    field.textContent = eval(field.textContent);
  }
}

function ControllerOnOff(){
  let val = localStorage.getItem('power');
  
  switch(val){
    case 'on':
      localStorage.setItem('power', 'off');
    break;
    case 'off':
      localStorage.setItem('power', 'on');
    break;
    default:
      localStorage.setItem('power', 'on');
    break;
  }
}