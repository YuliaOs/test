'use strict';

/*console.log('запрос данных...');

const req = new Promise(function (resolve, reject) { // создаем обещание(может завершится полож-но так и отриц)
    // , внутри колбэк ф-я function(resolve - то что выполнилось правильно, как ожидали,
    // reject - если ошибка в коде - не найден файл, ошибка сервера)

    setTimeout(() => {
        console.log('подготовка данных...');

        const product = {
            name: 'TV',
            price: 3000,
        };

        resolve(product);

    }, 2000);
});

    req.then((product) => { //метод кот выполняется на промисе в случае положит исхода -- возьмет данные из resolve
    //console.log('данные получены');
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            //console.log(product);
            resolve(product);
            // reject(); // если произошла ошибка, сработает ф-я reject,
            // пропускаются все then и переходит сразу к блоку catch
        }, 2000);
    }).then(data => {
            data.modify = true;
            return data;
    }).then(data => {
            console.log(data);
    }).catch(() => {
        console.error('Произошла ошибка');
    }).finally(() => { // блок срабатывает всегда
        console.log('Finally');
    });
});*/

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => { // ожидает выполнения всех промисов
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => { // отрабатывает, когда самый первый промис уже отработал
    console.log('All');
});