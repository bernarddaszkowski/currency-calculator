let ownElement = document.querySelector(".form__own");
let formElement = document.querySelector(".form");
let getElement = document.querySelector(".js-get");
let currencyElement = document.querySelector(".js-currency")

let rateEUR = 4.6175;
let rateUSD = 4.2532;
let rateGBP = 5.5446;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let own = +ownElement.value;
    let currency = currencyElement.value;

    let get

    switch (currency) {
        case "EUR":
            get = own / rateEUR;
            break;

        case "USD":
            get = own / rateUSD;
            break;

        case "GBP":
            get = own / rateGBP;
            break;

    }


    getElement.innerText = `Za ${ own } ${ currency } otrzymasz: ${ get.toFixed(2) } zł`
});

