const form = document.getElementById('form');
const input = document.getElementById('input');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event.target[0].value);
// });


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const  data = new FormData(form);
    asyncGetData(data.get('text'));

})

async function asyncGetData(type) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/${type}`);

    try {
        let body = await data.json();
        console.log(body);
    } catch (error) {
        console.log('error');
    } finally {
        console.log('finally');
    }

}