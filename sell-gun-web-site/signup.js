const modalSignup = document.getElementsByClassName('modal-window-clas')
const btn = document.getElementById('btnsignupId')

btn.addEventListener('click',()=>{
    modalSignup.style.display = 'block';
})

const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click',()=>{
    modalSignup.style.display = 'none';
})