const reviewsForm = document.forms.reviews;

reviewsForm.addEventListener('submit', event => {
  event.preventDefault();
  const { user_name, user_email, user_phone, user_pass, user_msg } =
    event.currentTarget.elements;

  // console.log('Form input name: ', user_name.value);
  // console.log('Form input email: ', user_email.value);
  // console.log('Form input phone: ', user_phone.value);

  // if (user_pass.value.length < 8 && !user_pass.value.includes('*')) {
  //   console.warn('Weak password');
  // }
});
