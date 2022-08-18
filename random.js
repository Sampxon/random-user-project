const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('no element selected');
  }
};

const img = getElement('.user-img');
