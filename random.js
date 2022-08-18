// const getElement = (selection) => {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw new Error('no element selected');
//   }
// };
import getElement from './utils/global-functions.js';

const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const allBtns = [...document.querySelectorAll('.icon')];
const URL = 'https://randomuser.me/api/';

//fetch
const fetchUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  //!destructure
  const person = data.results[0];
  console.log(person);
};
fetchUser();

const showUser = () => {
  //get user from api
  //display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
