const mySubHeading = document.getElementById('mySubHeading');
const myInput =  document.getElementById('myInput');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  mySubHeading.textContent = myInput.value;
});
