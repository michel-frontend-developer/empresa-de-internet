//  header animation
window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0 && window.innerWidth > 600);
});

//  modal
const contact = document.querySelectorAll('.sign-it');
const modal = document.querySelector('.modal-container');
const send = document.querySelector('.btn-send');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputCEP = document.getElementById('cep');
const inputNumber = document.getElementById('number');

//  show modal
contact.forEach(function(e){
    e.addEventListener('click', function(element){
        element.preventDefault();
        modal.classList.add('show');
    });
});

//  close modal
modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal-container') || e.target.classList.contains('far')){
        modal.classList.remove('show');
    }
});

//  send
send.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.remove('show');
    inputName.value = '';
    inputPhone.value = '';
    inputCEP.value = '';
    inputNumber.value = '';
});