//variable declaration
const shareBtn1 = document.querySelector('#share');
const shareBtn2 = document.querySelector('#share-btn');
const footer1 = document.querySelector('.main-footer');
const footer2 = document.querySelector('.share-footer');

shareBtn1.addEventListener('click', () => {
        footer1.classList.add('hide');
        footer2.classList.add('show');
        footer2.classList.add('animate');
});