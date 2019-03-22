
function checker(password){
  if(password === window.document.getElementById('username').value()){
    window.document.getElementById('submitter').setAttribute('class') = '';
  }
  else{
    window.document.getElementById('submitter').setAttriute('class') = 'noShow';
  }
}

if(window.document){window.document.getElementById('password').setAttriute('onkeydown') = checker('password');}