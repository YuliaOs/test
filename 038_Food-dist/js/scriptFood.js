window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');  // скроем весь контент
            item.classList.remove ('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); // будем удалять класс активности, без точки
        })
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        // console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            // console.log('hello');
            tabs.forEach((item, i) => { //каждый tab,
                                                                        // i -номер элемента по порядку кот перебираем
                if (target == item) { //эл в кот тыкнули будет совпадать с эл который перебираем,   один и тот же эл
                    // console.log(`hello`);
                    hideTabsContent();
                    showTabsContent(i); // i - номер эл
                }
            })
        }
    });

    // Timer

    const deadLine = '2024-06-20';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),  // разница м-ду датами --- к-во мс
            // сколько суток осталось до окончиния даты
            days = Math.floor(t / (1000 * 60 * 60 *24)), // (1000 * 60) - к-во мс в 1 мин (* 60) - в 1 часе (* 24) - в сутках
            hours = Math.floor((t/ (1000 * 60 * 60)) % 24),  // знак % делит на 24 и возвращает остаток от деления,
            // напр 5 % 2 = 1 // в итоге получаем хвостик кот не хватает до полных суток
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);
        // console.log(t,days,hours,minutes,seconds);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),  // селектор по классу = timer
            days = timer.querySelector('#days'),  // селектор по id = days
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endTime);  // записали объект возвращаемый ф-цией getTimeRemaining в переменную t

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();

    }

    setClock('.timer', deadLine);


// Modal (043 lesson)

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // добавим стиль, кот. не позволяет прокручивать страницу
        // clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal();
            // modal.classList.add('show');
            // modal.classList.remove('hide');
            // modal.classList.toggle('show');
            // document.body.style.overflow = 'hidden'; // добавим стиль, кот. не позволяет прокручивать страницу
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {    // если e.target - куда тыкнул
            // пользователь будет совпадать с modal окном
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // (сколько пользователь отлистал вниз по оси У) + (видимая часть на сайте без прокрутки) >= (прокрутка до конца стр)
    // как только они будут совпадать, значит пользователь долистал стр


    // Классы для карточек

    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = +this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `<img src=${this.src} alt=${this.alt}>\n
                                      <h3 class="menu__item-subtitle">${this.title}</h3>\n
                                     <div class="menu__item-descr">${this.description}</div>\n
                                     <div class="menu__item-divider"></div>\n
                                     <div class="menu__item-price">\n 
                                         <div class="menu__item-cost">Цена:</div>\n 
                                         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n 
                                     </div>`;
            this.parent.append(element);
        }
    }
    // const div = new MenuCard();
    // div.render();
    // или:
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. ' +
        'Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        // 'menu__item',
        // 'big',
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное ' +
        'исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        5,
        '.menu .container',
        'menu__item',
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного ' +
        'происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и ' +
        'импортных вегетарианских стейков.',
        11,
        '.menu .container',
        'menu__item',
    ).render();





    // Forms (053 + 054)
    const forms = document.querySelectorAll('form'); //(по тегу)

    const message = {
        loading: 'img/form/054_spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e)=> { // событие срабатывает кажд раз когда мы отправляем форму
            e.preventDefault(); //отменяем станд поведение

            const statusMessage = document.createElement('img'); //показывает спинер
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.append(statusMessage);
            // form.insertAdjacentElement('afterend, statusMessage'); // вместо form.append(statusMessage);
            //вставить statusMessage после form - afterend



            /* const request = new XMLHttpRequest();
             request.open('POST', 'js/server.php');*/
            //переделываем XMLHttpRequest в fetch запрос

            // request.setRequestHeader('Content-type', 'multipart/form-data'); // настроить заголовки, кот должны говорить серверу что именно приходит
            // request.setRequestHeader('Content-type', 'application/json');
            //'Content-type' - тип какого-то контента
            // когда мы используем связку XMLHttp объекта плюс FormData заголовок устанавливать не нкужно, он уст-ется автомат-ки

            const formData = new FormData(form); // позволяет собрать данные кот заполнил пользователь
            // в формате ключ-значение (во внутрь помещаем форму из кот нужно собрать данные)
            //важно наличие в тегах <input> атрибута name='', иначе formData не сможет найти input и
            // взять из него инф-ю и правильно сформировать объект

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            // const json = JSON.stringify(object); // превращает обыч объект в JSON

            // // request.send(json);

            // request.addEventListener('load', ()=> {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // })
            //вместо этого кода пишем fetch запрос:

            fetch('js/server.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                // body: formData,
                body: JSON.stringify(object)
            })
                .then(data => data.text()) // data - это те данные кот вернул сервер
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(message.failure); //действие при ошибке
            }).finally(() => { // выполнится очистка формы вне зависимости как закончился запрос
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog'); //(по классу)
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    //
    // fetch('db.json')
    //     .then(data => data.json())  // превращаем в обыч js объект
    //     .then(res => console.log(res));
});