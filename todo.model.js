import TodoView from './todo.view.js';

class TodoModel {
    constructor(){
        this.fromNow = 0
        this.toNow = 0 
        this.i = 0
        this.view = new TodoView()
    }

    leftCurrency(element){
        this.view.leftCurrencyMenuView(element)
        let currencyFrom = this.getCurrency(document.querySelector('.convert__to_list .convert__list_selected').textContent, element.textContent)
        currencyFrom.then((data)=>{
            this.view.rightCurrencyTextView(1/data, element)
            this.toNow = 1/data
            this.view.leftCurrencyTextView(data, element)
            this.fromNow = data
            this.view.changeInputByCurrency(element, Promise.resolve(1/data))
        })
    }

    rightCurrency(element){
        this.view.rightCurrencyMenuView(element)
        let currencyTo = this.getCurrency(element.textContent, document.querySelector('.convert__from_list .convert__list_selected').textContent)
        currencyTo.then((data)=>{
            this.view.toFromCurrencyTextView(data, element)
            this.fromNow = data
            this.view.fromFromCurrencyTextView(1/data, element)
            this.toNow = 1/data
            this.view.changeInputByCurrency(element, Promise.resolve(1/data))
        })
    }

    async getCurrency(from, to){
        if(from==to){
            return 1
        }
        let result = await (fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)).catch(()=>{
            alert('Something went wrong')
        })
        
        if(result===undefined)
            return 1
        return result.json().then(data => data.rates[to])
    }
}

export default TodoModel;