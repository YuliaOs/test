'use strict';

const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest ();
    // методы обьекта XMLHttpRequest
    request.open('GET', 'js/current.json'); //request.open(method, urt, async, login, pass);
    request.setRequestHeader( 'Content-type', 'application/json; charset=utf-8');
    request.send(); // принимает body - будет только в post запросах. в get нет

    // request.addEventListener ('readystatechange', () => {  // отслеживает состояние
    //     // запроса в данный текущ момент
    //     if (request.readyState === 4 && request.status === 200) { // 200 - ok, 4 - DONE
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         // console.log(data);
    //         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2 );
    //     } else {
    //         inputUSD.value = "Что-то пошло не так";
    //     }

        request.addEventListener ('load', () => {  // срабатывает только один раз когда запрос полностью готов
            if (request.status === 200) { // 200 - ok, 4 - DONE
                // console.log(request.response);
                const data = JSON.parse(request.response);
                // console.log(data);
                inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2 );
            } else {
                inputUSD.value = "Что-то пошло не так";
            }

    });



    // свойства
    // status - код ошибки 404, 0, 403, и т.д.
     // statusText - текстовое описание ответа от сервера (приписывается к коду
    // response (ответ от сервера )
    // readyState ---- свойство XMLHttpRequest.readvState возврашает текущее состояние объекта:


    // 0 TUNISENT  Объект был создан. метод ореп) еще не вызывался.
    //  1  OPENED Метод oреn оыл вызван.
    //   2  HEADERS_RECEIVED Метод send оыл вызван, доступны заголовки (headers) и статус
    // 3   LOADING Загрузка; responseText содержит частичные данные
    // 4   DONE Операция полностью завершена.

 });