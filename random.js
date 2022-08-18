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
  const { email, phone } = person;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const { name: street, number } = person.location.street;
  const { large: image } = person.picture;
  return {
    phone,
    email,
    password,
    age,
    street,
    number,
    image,
    first,
    last,
  };
};
fetchUser();

const showUser = async () => {
  //get user from api
  //display user
  const data = await fetchUser();
  console.log(data);
};
showUser();

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
