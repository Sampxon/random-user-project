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
  // value.innerHTML = `<p class="user-value">${last} ${first}</p>`;
};

const showUser = async (user) => {
  //get user from api
  //display user
  //fetchUser().then((data)=>{})
  const data = await fetchUser();
  console.log(data);
  console.log('show user');
  //display user
  // const displayUser = user.map((item) => {});
  img.src = data.image;
  value.textContent = `${data.last} ${data.first}`;
  allBtns[0].classList.add('active');
  allBtns.forEach((Btns) => {
    const label = Btns.dataset.label;
    Btns.addEventListener('click', () => {
      console.log(data[label]);
      title.textContent = `my ${label} is`;
      value.textContent = data[label];
    });
  });
};

//can i use '.this' in the above ?????

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
