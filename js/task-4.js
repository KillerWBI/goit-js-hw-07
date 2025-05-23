const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // const { email, password } = form.elements;

  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();


  if (emailValue !== '' && passwordValue !== '') {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formData);
    form.reset();
    return;
  }
  alert('All form fields must be filled in');
});
