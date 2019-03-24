
function checker(password){
  if(!document){
    let document = {};
  }
  else{
    if(password === document.getElementById('username').value()){
      document.getElementById('submitter').setAttribute('class') = '';
    }
    else{
      document.getElementById('submitter').setAttriute('class') = 'noShow';
    }
  }

}

if(window.document){window.document.getElementById('password').setAttriute('onkeydown') = checker('password');}