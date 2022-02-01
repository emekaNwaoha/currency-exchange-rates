window.addEventListener("load", () => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=19709ec7873c6cebc7f300cb09b2249f',

    )
        .then(response => response.json())
        .then(json => {
            console.log(json)

            let rates = Object.keys(json.rates).map((el, i) => {
                return `<p>${el}: ${json.rates[el]} </p>`
            })
            rates = rates.join('')
           let base= json.base;
           let date=json.date;
            document.getElementById('content').innerHTML = rates;
            document.getElementById('base').innerHTML=base;
            document.getElementById('date').innerHTML="Date:"+date;
        })

});
