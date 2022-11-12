
//declaring and initializing variable holding id and class name from html elements.
const userInput1 = document.querySelector('.userInput1')
const userInput2 = document.querySelector('.userInput2');
const result = document.querySelector('#resultContainer');


// This function returns the Sub-String based on user input;
function subString(){

//local variables to store the userInput 
let sentence = userInput1.value;
let letter = userInput2.value;

//declaring a local variable to store the returning value;
let substr;

//Validation code to check if the input fields are empty or not during submission.
if(sentence == '' || letter == ''){
    alert('Please provide the input');
}
else if(sentence.charAt(sentence.indexOf(letter))){
let curr = sentence.indexOf(letter);
substr = sentence.substring(curr+1);
return result.innerHTML =
`<p>Sentence:${sentence}</p>
<p>Letter : ${letter}</p>
<p>Result: ${substr}</p>`
console.log(sentence,letter);
}
else{
substr = 'The letter does not exist in the sentence';
return result.innerHTML =
`<p>Sentence:${sentence}</p>
<p>Letter : ${letter}</p>
<p>Result: ${substr}</p>`
console.log(sentence,letter);
}
}

//Reset function clears the input element.
function reset(){
userInput1.value = '';
userInput2.value = '';
result.innerHTML = ''
}






















