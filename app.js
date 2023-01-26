const link = document.getElementById('link');
const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const email = document.getElementById('email');
const round = document.getElementById('round');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     //console.log(event.target); // показывает запрашиваемое нами в консоли
//     console.log('click link');
// });

// /*form.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target); // показывает запрашиваемое и у инпута и кнопки. мы повесили ивент на всю форму, поэтому это сработала и со всеми дочерними жлементами

// });
// */


// // событие submit - событие для отправки жанных форм
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     //console.log(event.target[0].value); 
// });

// input.addEventListener('keydown', (event) => {
//     console.log('Клавиша нажата', event.code); //когда нажимаем на клавиди в инпуте - появляется событие в консоли 
// });

// btn.addEventListener('click', (event) => {
//     console.log(event.target.innerText);
// });

// email.addEventListener('keydown', (event) => {
//     if(event.code === 'Enter') {
//         console.log('email', event.target.value); 
//     }
// });

/* 
window.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
        round.style.marginLeft = '20px';
    } else if(event.code === 'ArrowLeft') {
        round.style.marginLeft = '-20px';
    }else if(event.code === 'ArrowUp') {
        round.style.marginTop = '20px';
    }else if(event.code === 'ArrowDown') {
        round.style.marginTop = '-20px';
    }
});
*/

window.addEventListener('keydown', (event) => {
    const elemRect = round.getBoundingClientRect(); //показывает координаты элемента
    //console.log(elemRect);
    const clientX = elemRect.top;
    const clientY = elemRect.left;

   

    switch (event.code) {
        case "ArrowRight":
          round.style.left = clientY + 10 + "px";
          break;
        case "ArrowLeft":
          round.style.left = clientY - 26 + "px";
          break;
        case "ArrowUp":
          round.style.top = clientX - 26 + "px";
          break;
        case "ArrowDown":
          round.style.top = clientX + 10 + "px";
          break;
        default:
          break;
}
});


window.addEventListener('keyup', (event) => {
round.style.left = '0';
round.style.top = '0';
});


const outerDiv = document.querySelector("div.outer");
const innerDiv = document.querySelector("div.inner");

outerDiv.addEventListener(
  "click",
  function () {
    console.log("Внешний div был щелкнут!");
  },
  true
);

innerDiv.addEventListener(
  "click",
  function () {
    console.log("Внутренний div был щелкнут!");
  },
  true
);