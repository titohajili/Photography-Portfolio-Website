// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})
//CONTACT BUTTONS(circular tex buttons)
const textButtons = document.querySelectorAll('.contact-btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 13}deg)">${character}</span>`).join('');

    
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        599: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 4,
            spaceBetween: 60
        }
    }
  });

