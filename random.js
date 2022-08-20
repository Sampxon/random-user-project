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

const fetchUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  const neededUser = data.results[0];
  console.log(neededUser);
  //!destructure
  //image, name, phone, password, location, age, email, firstName, lastName
  const { email, phone } = neededUser;
  const { name: street } = neededUser.location.street;
  const { large: image } = neededUser.picture;
  const { first, last } = neededUser.name;
  const { age } = neededUser.dob;
  const { password } = neededUser.login;
  console.log({ email, phone, street, image, first, last });
  return { email, phone, street, image, first, last, age, password };
};

const displayUser = async () => {
  const data = await fetchUser();
  console.log(data);
  value.textContent = `${data.last} ${data.first}`;
  img.src = data.image;
  allBtns.forEach((Btns) => {
    const label = Btns.dataset.label;
    console.log(label);

    Btns.addEventListener('click', (btn) => {
      title.textContent = `My ${label} is`;
      value.textContent = data[label];
      removeActives();
      Btns.classList.add('active');
    });
  });
};
const removeActives = () => {
  allBtns.forEach((singleBtn) => {
    singleBtn.classList.remove('active');
  });
};

window.addEventListener('DOMContentLoaded', displayUser);
btn.addEventListener('click', displayUser);
