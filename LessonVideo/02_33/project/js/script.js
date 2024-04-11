/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', ()=> { //DOMContentLoaded - все дом узлы уже готовы
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv'),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector(".promo__interactive-list"), // только первый элемент
        addForm = document.querySelector( 'form.add'),
        addInput = addForm.querySelector(' .adding__input'),
        checkbox = addForm.querySelector ('[type="checkbox"]'); // по значению атрибута html

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // отменить стандартное поведение браузера
        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) { //  будет выполняться только, когда инпут заполнен (true), иначе false

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`  // обрезать начало фильма до 21 символа
            }

            if (favourite) {
                console.log("добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm); //добавить введенный пользователем фильм в список фильмов
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset(); // обращение к элементу, на котором происходит событие, очистить форму
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }

// console.log(movieList);

    const makeChanges = () => {
        genre.textContent = "драма";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    movieDB.movies.sort();
    function createMovieList(films, parent) {
        movieList.innerHTML = "";
        sortArr(films);


        //console.log(poster.innerHTML);
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                        <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>
            `;
        })

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", ()=> {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); // вырезаем опр эл-т из массива i - номер с которого нужно начать,
                // 1 - сколько эл-в удалить
                createMovieList(films, parent);
            });
        });
    }
    deleteAdv(adv);
    makeChanges();


    createMovieList(movieDB.movies,movieList);
});
