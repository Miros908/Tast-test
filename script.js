//Имя:только буквы без пробелов
//Дата:формат ДД/ММ/ГГГГ.
//Адрес сайта:стандартный формат URL https://||http:// ....
//Ip адрес: формат  только цыфры  XXX.XXX.XXX.XXX
//Номер кредитной карты:формат XXXX-XXXX-XXXX-XXXX
//Email: Любые буквы и цыфры XXXX@XXXXX.XXX только gmail!
//Номер телефона в формате:+380XXXXXXXXX
//Пароль:Должен содержать большие и маленькие буквы,обязятельно цыфра и спец.символ

const regExpression = {
    name: /^[A-Za-z]+$/,
    data: /^\d{2}(\/)\d{2}(\/)\d{4}$/,
    url: /^https?\:\/\/\w+\.\w+$/,
    ip: /^\d{3}\.\d{3}\.\d{3}\.\d{3}$/,
    credit: /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/,
    email: /^\w+(@gmail)\.\w+$/,
    phone: /^\+380\d{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=.*[\d]).+$/,
    password2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=.*[\d]).+$/

}
const inputbox = document.querySelector('.input_box')
const form = document.querySelector('.data_user')
const input = inputbox.querySelectorAll('input')
const closeButton = document.querySelector('.close')
const succesForm = document.querySelector(('.succes_message'))



closeButton.addEventListener('click', () => {

    succesForm.classList.add('hidden')
})


const check = function () {
    const password=inputbox.querySelector("#password")
    const password2=inputbox.querySelector("#password2")
    let check = true;
    for (let i = 0; i < input.length; i++) {

        const regExp = regExpression[input[i].id]

        if (regExp.test(input[i].value) === false) {
            input[i].classList.add("error")
            check = false
        } else {
            input[i].classList.remove("error")
        }


    }
    if(password.value!==password2.value){
        password.classList.add("error")
        password2.classList.add("error")
        check=false
    }


    return check
}




form.addEventListener("submit",(event)=>{

  event.preventDefault();

if(check()){

 succesForm.classList.remove('hidden')
}


})







