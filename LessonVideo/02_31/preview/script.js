const button = document.querySelector('button'),
        btns = document.querySelectorAll('button'),
        overlay = document.querySelector(".overlay"),
        link = document.querySelector('a');


// button.onclick = function () {
//     alert('Click');
// }

//

// button.addEventListener('', (event) => {
//     console.log(event);
//     console.log(event.target);
//     event.target.remove();
//     console.log( 'Hover');
// });

//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i = 1) {
    //     button.removeEventListener('click', deleteElement);
    // }
};

// button.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); // всплытие события - это когда событие происходит на
// вложенном эл, затем происходит на родителе и так выше и выше по иерархии
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true})  // false - не передаем никакие опции
                                                            // once - выполнить только один раз
});


link.addEventListener("click", function(event) {  // ("click", (e) => {})
    event.preventDefault(); // отмена стандартного поведения - не будем переходить по ссылке
    console.log(event.target);
});
