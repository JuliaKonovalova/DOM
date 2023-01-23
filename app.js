let text = document.getElementById("text")
let deleteBtn = document.querySelector(".delete-all");
let container = document.querySelector(".container");
let tasks = document.querySelector('.tasks');

//console.log(deleteBtn.innerText);
//console.log(container.innerHTML);
//console.log(text.value);

//обработка события клик 
deleteBtn.addEventListener("click", () =>{
    console.log('Click');
});

//союыие изменения
text.addEventListener("change", () =>{
    tasks.innerText = text.value;
});
