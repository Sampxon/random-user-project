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
