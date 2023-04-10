let inputUserName = prompt('Please enter your name')

let gender = prompt('Please enter you gender(Male/Female)');
  if(gender.toLowerCase() == "male") {
    console.log('Male was added')
  } else if (gender.toLowerCase() == "female") {
    console.log('Female was added')
    } else {
    prompt('Please enter you gender(Male/Female)')
}

let age = prompt('Please enter you age!');
  if(age <= 0) {
    alert('Please inter real age!')
  } else{
    console.log('your age is '+age+' was accepted')
  }

  let welcome = confirm('Would you like to git Welcoming message? for skip use cancel');
  if (welcome) {
    if (gender === 'male') {
      alert('Welcome, Mr. ' + inputUserName);
    } else if (gender === 'female') {
      alert('Welcome, Ms. ' + inputUserName);
    } else {
      alert('Welcome, '+ inputUserName);
    }
}

