//Get the number inputed
const numberInput = document.querySelector('input[name="number"]');

////query select all the buttons 
const addNumberButton = document.querySelector('button');
const SortOneNumber = document.querySelector('#sortOne');
const SortAllNumbers = document.querySelector('#sortAll');

// query select all the output locations
const numberBankOutput = document.querySelector('#numberBank output');
const oddOutput = document.querySelector('#odds output');
const evenOutput = document.querySelector('#evens output');

//Now create all the event buttons one at a time and make sure to
//display where it needs to go. 

addNumberButton.addEventListener('click', function (event) {
  event.preventDefault(); 
  const number = numberInput.value.trim();
  numberBankOutput.textContent += number + ' ';
  numberInput.value = '';

});


SortOneNumber.addEventListener('click', function (event) {
    const storedNumbers = numberBankOutput.textContent.split(' ');
    const number = storedNumbers.shift();
    const isOdd = parseInt(number) % 2 !== 0;

 if (isOdd) {
    oddOutput.textContent += number + ' ';
  } else {
    evenOutput.textContent += number + ' ';
  }
  numberBankOutput.textContent = storedNumbers.join(' ');
  });

  SortAllNumbers.addEventListener('click', function (event) {
 const storedNumbers = numberBankOutput.textContent.trim().split(' ');
 numberBankOutput.textContent = '';

 for (const number of storedNumbers) {
   const isOdd = parseInt(number) % 2 !== 0;

   if (isOdd) {
     oddOutput.textContent += number + ' ';
   } else {
     evenOutput.textContent += number + ' ';
   }
 }
});