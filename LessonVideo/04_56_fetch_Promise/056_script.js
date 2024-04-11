/*API - application programming interface набор данных и возможностей кот предоставляют нам какое-то готовое решение
    напр в операц-й системе мобильного телефона - доступ к вибрации, доступ к настройкам камеры -
    интерфейс с кот можно работать
(DOM API - методы кот позволяют нам работать с эл-ми на стр) напр - document.querySelector - уже встроено в браузер
google maps api - гугл предоставляет нам возможность работать с картами (модифицировать, добавлять какое-то поведение)*/
// JsonPlaceHolder - готовое решение? url - куда мы будем отправлять запросы к этой базе данных
//похож на get запрос, позволяет общаться с сервером, постороена на промисах
// здесь делаем запрос к todos/1 получаем доступ к 1 тудушке
// fetch('https://jsonplaceholder.typicode.com/todos/1') - отсюда возвращается промис
// .then(response => response.json()) - превращает ответ в js объект и если там успешно прошло за какой-то
// промежуток времени, то мы опять выполняем .then(json => console.log(json));
/*

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

*/

/*

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: "Alex"}),
    headers: {
        'Content-type': 'application/json',
    }
})
    .then(response => response.json())
    .then(json => console.log(json));*/