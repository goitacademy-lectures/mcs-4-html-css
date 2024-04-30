console.log('Phone mask is worked');
const inputTelElement = document.querySelector('input[type="tel"]');

const im = new Inputmask('+38(099) 999-99-99');
im.mask(inputTelElement);
