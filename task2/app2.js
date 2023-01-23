let btn = document.querySelector('#btn');
let text = document.querySelector('.text');


btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = text.value;
    let list = document.querySelector('.list');
    list.appendChild(li);  

})



