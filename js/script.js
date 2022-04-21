{
    const Calculate = (currency, own) => {
        const rateEUR = 4.6175;
        const rateUSD = 4.2532;
        const rateGBP = 5.5446;

        switch (currency) {
            case "EUR":
                return own / rateEUR;

            case "USD":
                return own / rateUSD;

            case "GBP":
                return own / rateGBP;

        }

    }

    const getUpdateText = (own, get, currency) => {
        const getElement = document.querySelector(".js-get");
        getElement.innerHTML = `Za <strong> ${own} </strong> zł otrzymasz: <strong> ${get.toFixed(2)} </strong> ${currency}.`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const ownElement = document.querySelector(".form__own");
        const currencyElement = document.querySelector(".js-currency")
        const own = +ownElement.value;
        const currency = currencyElement.value;

        let get = Calculate(currency, own);

        getUpdateText(own, get, currency);

    }

    const init = () => {
        const formElement = document.querySelector(".form");
        formElement.addEventListener("submit", onFormSubmit)
    }

    init();
}