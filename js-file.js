const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!'

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph-red');
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.cssText = 'color: red;';

const heading_3 = document.createElement('h3');
heading_3.classList.add('heading_3');
heading_3.textContent = 'I\'m a blue h3!';
heading_3.style.cssText = 'color: blue;';

const anotherContainer = document.createElement('div');
anotherContainer.setAttribute('id', 'anotherContainer');
anotherContainer.style.cssText = 'border: 1px solid black; background-color: pink;';

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading_3);

const heading_1 = document.createElement('h1');
heading_1.classList.add('heading_1');
heading_1.textContent = 'I\'m in a div';

const paragraphTwo = document.createElement('p');
paragraphTwo.classList.add('paragraph-two');
paragraphTwo.textContent = 'ME TOO!';

anotherContainer.appendChild(heading_1);
anotherContainer.appendChild(paragraphTwo);
container.appendChild(anotherContainer);

// Events
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  console.log(e);
});

btn.addEventListener('click', function (e) {
  console.log(e.target);
});

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});