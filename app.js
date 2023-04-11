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

  let welcome = confirm('Would you like to git Welcoming message? use cancel for skip ');
  if (welcome) {
    if (gender === 'male') {
      alert('Welcome, Mr. ' + inputUserName);
    } else if (gender === 'female') {
      alert('Welcome, Ms. ' + inputUserName);
    } else {
      alert('Welcome, '+ inputUserName);
    }
}


function questions (quistion=[]){
 
let question1= prompt(inputUserName + " are you sure this is your name?/ (Yes/No)")
let question2= prompt(`Do u confirm ${age} is ur Age?/ (Yes/No)`)
let question3= prompt("Are u happy with the website?/ (Yes/No)")
quistion.push(question1,question2,question3)

// console.log(quistion)

for (let i = 0; i < quistion.length; i++) {
  x=[]
    if(quistion[i]  == 'yes'){
      console.log(x[i]=quistion[i])
   } 
   else if (quistion[i] == 'no'){
      console.log(x[i]=quistion[i])
   } 
   else {
       console.log(x[i]='invalid Value')
  
   } 
  }
  return quistion
}
 questions()

 