//перекрасить заголовок:
//document.getElementsByClassName( "main-title")[0].style.color = "red";

document.getElementById("main-action-button").onclick = function () {
    //плавный переход к нужному ID
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
};

//находим все ссылки элемена а, которые находятся в меню-итем
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

//оживляем кнопку "Заказать"
let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

//обработчик событий по нажатию кнопки ОФОРМИТЬ ЗАКАЗ
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
//если ошибки нет, то оставляем тот фон, что есть
            item.parentElement.style.background = "";
        }
    });
//выполняем результат выполнения валидации, если ошибки не было
    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = ""; //очищаем значение для инпута
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

//меняем валюту
let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90.25;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 2.52;
    }
    else if (currentCurrency === "BYN") {
        newCurrency = "€";
        coefficient = 0.89;
    }
    else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 7.14;
    }
    e.target.innerText = newCurrency;
    for(let i =0; i< prices.length; i++){
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}

