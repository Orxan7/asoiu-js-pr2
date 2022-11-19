class todoView {
    constructor(){
        this.fromNow = 0
        this.toNow = 0 
        this.i = 0
    }

    navbarItemColor(element){
        document.querySelector('.navbar__list_item-selected').className = "navbar__list_item"
        element.className = "navbar__list_item navbar__list_item-selected" 
    }

    leftCurrency(element){
        let from = document.querySelector('.convert__from_list .convert__list_selected')
        from.className = from.className.replace(' convert__list_selected','')
        element.className += ' convert__list_selected'
        let currencyTo = this.getCurrency(element.textContent, document.querySelector('.convert__to_list .convert__list_selected').textContent)
        let currencyFrom = this.getCurrency(document.querySelector('.convert__to_list .convert__list_selected').textContent, element.textContent)
        currencyTo.then((data)=>{
            document.querySelector('.currency-from').textContent = '1 '+ element.textContent + ' = ' 
            + Math.round(data*10000)/10000 + " " + document.querySelector('.convert__to_list .convert__list_selected').textContent
            this.toNow = data
        })
        currencyFrom.then((data)=>{
            document.querySelector('.currency-to').textContent = '1 '+ document.querySelector('.convert__to_list .convert__list_selected').textContent 
            + ' = ' +Math.round(data*10000)/10000 + " "+ element.textContent
            this.fromNow = data
        })
        this.changeInputByCurrency(element, currencyTo)
    }

    rightCurrency(element){
        let to = document.querySelector('.convert__to_list .convert__list_selected')
        to.className = to.className.replace(' convert__list_selected','')
        element.className += ' convert__list_selected' 
        let currencyTo = this.getCurrency(element.textContent, document.querySelector('.convert__from_list .convert__list_selected').textContent)
        let currencyFrom = this.getCurrency(document.querySelector('.convert__from_list .convert__list_selected').textContent, element.textContent)
        currencyTo.then((data)=>{
            document.querySelector('.currency-to').textContent = '1 '+ element.textContent + ' = ' + Math.round(data*10000)/10000 +" " 
            +document.querySelector('.convert__from_list .convert__list_selected').textContent
            this.toNow = data
        })
        currencyFrom.then((data)=>{
            document.querySelector('.currency-from').textContent = '1 '+ document.querySelector('.convert__from_list .convert__list_selected').textContent 
            + ' = ' + Math.round(data*10000)/10000 +" " + element.textContent
            this.fromNow = data
        })
        this.changeInputByCurrency(element, currencyFrom)
        
    }

    changeInputByCurrency(element, currency){
        currency.then(data=>{
            if(element.parentElement.className.includes('from')){
                document.querySelector(".right-input").value = Math.round((document.querySelector(".left-input").value*data)*10000)/10000
            }
            else if(element.parentElement.className.includes('to')){
                document.querySelector(".right-input").value = Math.round((document.querySelector(".left-input").value*data)*10000)/10000
            }
        })

    }

    changeInput(element){
        if(element.parentElement.className.includes('from')){
            document.querySelector(".right-input").value = Math.round((element.value*this.toNow)*10000)/10000
        }
        else if(element.parentElement.className.includes('to')){
            document.querySelector(".left-input").value = Math.round((element.value*this.fromNow)*10000)/10000
        }
    }

    async getCurrency(from, to){
        if(from==to){
            return new Promise((resolve) => {
                resolve(1)
            })
        }
        let result = await
        fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)
        .then(res => res.json())
        .then(data => data.rates[to])
        .catch(()=>{
            if(this.i%2==1){
                alert('Something went wrong')
                this.i++
            }
            else
            {
                this.i++
            }
            return 0
        })
        return result
    }
}

export default todoView;