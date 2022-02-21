let inPut = document.getElementsByClassName('date_range'),
    outPut = document.querySelectorAll('.result'),
    totalOutput = document.querySelector('#total_price');

let today = new Date(),
    curentDay = today.getDate()-1,
    curentMonth = today.getMonth() + 1,
    curentYear = today.getFullYear(),
    todayDate = curentYear + '-' + curentMonth + '-' + curentDay;

function setDateInput(place,lock) {
    let rangeDate = flatpickr(place, {
        disable: [{
            'from': '2000-09-02',
            'to': lock
        }],
        enableTime: false,
        mode: "range",
        dateFormat: 'd-m-Y',
        allowInput: true,

        onClose: () => {
            calcul(rangeDate)
        },
        onChange: () => {
            update()
        }
    });
}

setDateInput(inPut,todayDate);


function calcul(date) {

    let totalPrice = 0;
    for (let i = 0; i < inPut.length; i++) {
        let data1 = new Date(date[i].selectedDates[0]),
            data2 = new Date(date[i].selectedDates[1]),

            resultValue = data2 - data1,
            colvoDays = (resultValue / 1000 / 60 / 60 / 24) + 1,
            price;
        outPut[i].innerHTML = '---';

        if (inPut[0].value == '' && inPut[1].value == '' && inPut[2].value == '' && inPut[3].value == '' && inPut[4].value == '') {
            totalOutput.innerHTML = '---';

            for (let r = 0; r < inPut.length; r++) {
                outPut[r].innerHTML = '---';
            }
        }

        if (colvoDays) {
            price = colvoDays * 100;
            outPut[i].innerHTML = ` Дней: ${colvoDays} Цена: ${price}lei `;

            totalPrice += price;
            totalOutput.innerHTML = totalPrice + ' $ ';

        }

        inPut[i].addEventListener('change', function () {
            if (inPut[i].value == '') {
                outPut[i].innerHTML = `---`;
            }
        }); 

    }
}





console.log(parseInt('077'));
console.log(parseFloat('077'));
console.log(Math.ceil(0.77));