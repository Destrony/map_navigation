const buttonContainer = document.querySelector('.button-container');
const buttons = buttonContainer.querySelectorAll('.circle-button');

function handleClick(event) {
  const button = event.target.closest('.circle-button');
  if (!button) {
    buttons.forEach((button) => {
      button.classList.remove('open');
      button.querySelector('.minus').style.display = 'none';
      button.querySelector('.plus').style.display = 'inline-block';
      button.querySelector('.text').style.display = 'none';
    });
  } else {
    const minus = button.querySelector('.minus');
    const plus = button.querySelector('.plus');
    const text = button.querySelector('.text');
    if (event.target.classList.contains('plus') || button === event.target) {
      event.preventDefault();
      button.classList.toggle('open');
      minus.style.display = button.classList.contains('open') ? 'inline-block' : 'none';
      plus.style.display = button.classList.contains('open') ? 'none' : 'inline-block';
      text.style.display = button.classList.contains('open') ? 'inline-block' : 'none';
    } else if (event.target.classList.contains('minus') || event.target.classList.contains('text')) {
      button.classList.remove('open');
      minus.style.display = 'none';
      plus.style.display = 'inline-block';
      text.style.display = 'none';
    }
  }
}

buttonContainer.addEventListener('click', handleClick);
