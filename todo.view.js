class TodoView {
    constructor(){
        
    }

    navbarItemColor(element){
        document.querySelector('.navbar__list_item-selected').className = "navbar__list_item"
        element.className = "navbar__list_item navbar__list_item-selected" 
    }

    leftCurrencyMenuView(element){
        let from = document.querySelector('.convert__from_list .convert__list_selected')
        from.className = from.className.replace(' convert__list_selected','')
        element.className += ' convert__list_selected'
    }

    rightCurrencyMenuView(element){
        let to = document.querySelector('.convert__to_list .convert__list_selected')
        to.className = to.className.replace(' convert__list_selected','')
        element.className += ' convert__list_selected' 
    }

    leftCurrencyTextView(data, element){
        document.querySelector('.currency-to').textContent = '1 '+ document.querySelector('.convert__to_list .convert__list_selected').textContent 
        + ' = ' +Math.round(data*10000)/10000 + " "+ element.textContent
    }

    rightCurrencyTextView(data, element){
        document.querySelector('.currency-from').textContent = '1 '+ element.textContent + ' = ' 
            + Math.round(data*10000)/10000 + " " + document.querySelector('.convert__to_list .convert__list_selected').textContent
    }

    toFromCurrencyTextView(data, element){
        document.querySelector('.currency-to').textContent = '1 '+ element.textContent + ' = ' + Math.round(data*10000)/10000 +" " 
        +document.querySelector('.convert__from_list .convert__list_selected').textContent
    }

    fromFromCurrencyTextView(data, element){
        document.querySelector('.currency-from').textContent = '1 '+ document.querySelector('.convert__from_list .convert__list_selected').textContent 
        + ' = ' + Math.round(data*10000)/10000 +" " + element.textContent
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

    changeInput(element, fromNow, toNow){
        if(element.parentElement.className.includes('from')){
            document.querySelector(".right-input").value = Math.round((element.value*toNow)*10000)/10000
        }
        else if(element.parentElement.className.includes('to')){
            document.querySelector(".left-input").value = Math.round((element.value*fromNow)*10000)/10000
        }
    }
}

export default TodoView;