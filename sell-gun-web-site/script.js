function createCard(name,price,stock,imgSrc){
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = name;
    img.style.width = '300px';   // Встановлює ширину зображення
    img.style.height = '250px';  // Встановлює висоту зображення

    const gunName = document.createElement('h1');
    gunName.textContent = name;
    
    const priceHeader = document.createElement('h3');
    priceHeader.textContent = 'Price:';
    const priceText = document.createElement('h2');
    priceText.className = 'price-text';
    priceText.textContent = price;

    const onHandAmount = document.createElement('h4');
    onHandAmount.textContent = 'On hand:';
    const amountText = document.createElement('h3');
    amountText.className = 'on-hand-text';
    amountText.textContent = stock;

    const textAmountGun = document.createElement('h5')
    textAmountGun.textContent = 'I need';
    textAmountGun.className = 'textForAmountGunCart';
    const inputTextAmount = document.createElement('textarea');
    const inputBtnLeft = document.createElement('button');
    inputBtnLeft.textContent = '<';
    inputBtnLeft.addEventListener('click', ()=>{
        if(inputTextAmount.value > 0){
            inputTextAmount.value = parseInt(inputTextAmount.value)-1
        }
    })
    inputTextAmount.type = 'number';
    inputTextAmount.min = 0;
    inputTextAmount.value = 0;
    inputTextAmount.max = 99;
    inputTextAmount.disabled;
    inputTextAmount.className = 'input-text-area-cart'
    inputTextAmount.className = 'inputTextAmountToCart';
    const inputBtnRight = document.createElement('button');
    inputBtnRight.textContent = '>';
    inputBtnRight.addEventListener('click',()=>{
        if(inputTextAmount.value < 99){
            inputTextAmount.value = parseInt(inputTextAmount.value) + 1
        }
    })

    
    const btnCart = document.createElement('button');
    btnCart.textContent = 'Add to end cart'
    btnCart.className = 'btn-add-to-cart';
    btnCart.addEventListener('click',()=>{
        const cartContainer = document.querySelector('.newCartItemText')
        const newCartItem = document.createElement('h5');
        newCartItem.className = 'text-newCartItem'
        newCartItem.textContent = `${gunName.textContent} in amount ${inputTextAmount.value}`
        cartContainer.appendChild(newCartItem);
    })


    card.appendChild(img);
    card.appendChild(gunName);
    card.appendChild(priceHeader);
    card.appendChild(priceText);
    card.appendChild(onHandAmount);
    card.appendChild(amountText);
    card.appendChild(textAmountGun);
    card.appendChild(inputBtnLeft)
    card.appendChild(inputTextAmount);
    card.appendChild(inputBtnRight)
    card.appendChild(btnCart);
    

    const container = document.getElementById('gun-list');
    container.appendChild(card);
}


createCard('AK-47','5.000','3','./ak.webp');
createCard('AK-47','5.000','9','./ak.webp');
createCard('AK-47','5.000','1','./ak.webp');
createCard('AK-47','5.000','5','./ak.webp');






//registration
const password = document.getElementById('input-password')
const againPassword = document.getElementById('input-password-again')
const f_name = document.getElementById('input-name')
const errorMsg = document.getElementById('error-msg')
const btn_reg = document.getElementById('btn_Reg')

function checkPass(){
    if(password.value != againPassword.value){
        errorMsg.style.display = 'block'
    }
    else{
        errorMsg.style.display = 'none';
        alert(`Welcome, dear ${f_name}`)
        password.style.display = 'none'
        againPassword.style.display = 'none'
        f_name.style.display = 'none'
        errorMsg.style.display = 'none'
        btn_reg.style.display = 'none';
        const inputCode = document.createElement('input');
        inputCode.type = 'text';
        inputCode.id = 'input-code';
        inputCode.placeholder = 'Enter the code we sent you by email'
        document.body.appendChild(inputCode)
    }
}

btn_reg.addEventListener('click', checkPass)

//registration