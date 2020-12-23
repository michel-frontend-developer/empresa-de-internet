//  header animation
window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0 && window.innerWidth > 600);
});

//  modal and form
const contact = document.querySelectorAll('.sign-it');
const modal = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');
const send = document.querySelector('.btn-send');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputCEP = document.getElementById('cep');
const inputNumber = document.getElementById('number');
const modalSucess = document.querySelector('.modal-sucess');
const modalSended = document.querySelector('.modal-sended');

//  show modal
contact.forEach(function(e){
    e.addEventListener('click', function(element){
        element.preventDefault();
        gsap.to(modal, {duration: 0, autoAlpha: 1});
        gsap.from(modalContent, {duration: .3, autoAlpha: 0, y: -60});
    });
});

//  close modal
modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal-container') || e.target.classList.contains('far')){
        gsap.to(modal, {duration: 0, autoAlpha: 0});
    }
});

//  validation
send.addEventListener('click', function(e){
    e.preventDefault();
    if(inputName.value === '' || inputPhone.value === '' || inputCEP.value === '' || inputNumber.value === ''){
        alert('preencha todos os campos!');
    }else{
        sendedAnimation();
    }
});

//  sended sucess
function sendedAnimation(){
    gsap.to(modal, {duration: .3, autoAlpha: 0});
    gsap.to(modalSucess, {duration: .3, autoAlpha: 1});
    gsap.from(modalSended, {duration: .3, y: 60});

    setTimeout(function(){
        gsap.to(modalSucess, {duration: .3, autoAlpha: 0});

        inputName.value = '';
        inputPhone.value = '';
        inputCEP.value = '';
        inputNumber.value = '';
    }, 2000);
}