document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');
  let currentCardIndex = 0;
  const displayTime = 10000;//time
  const video = document.getElementById('background-video');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  // Card is loaded
  function showNextCard() {
    cards.forEach((card, index) => {
      card.classList.remove('show');
      card.classList.add('hide');
    });
    // Card show hide
    const currentCard = cards[currentCardIndex];
    currentCard.classList.remove('hide');
    currentCard.classList.add('show');

    currentCardIndex = (currentCardIndex + 1) % cards.length;

    setTimeout(showNextCard, displayTime);
  }

  showNextCard();

  video.addEventListener('ended', function() {
    currentCardIndex = 0;
    showNextCard();
  });

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
  });
});
