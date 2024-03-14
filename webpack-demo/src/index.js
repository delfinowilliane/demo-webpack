import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';

function getComponent() {

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
