import TodoModel from './todo.model.js';
import TodoView from './todo.view.js';


class TodoController {
    constructor() {
        this.model = new TodoModel()
        this.view = new TodoView()
        this.eventListener()
    }


    eventListener(){
        this.model.rightCurrency(document.querySelector('.convert__to_list .convert__list_selected'))
        this.model.leftCurrency(document.querySelector('.convert__from_list .convert__list_selected'))
        this.navbarListener()
        this.currencyListener()
        this.inputListener()
    }

    navbarListener(){
        document.querySelectorAll('.navbar__list_item').forEach((element)=>{
            element.addEventListener('click', ()=>{
                this.view.navbarItemColor(element)
            })
        })
    }


    currencyListener(){
        document.querySelectorAll('.convert__list-item').forEach(element =>{
            element.addEventListener('click', ()=>{
                if(element.parentElement.className.includes('from'))
                {
                    this.model.leftCurrency(element)
                }
                else if(element.parentElement.className.includes('to'))
                {
                    this.model.rightCurrency(element)
                }  
            })
        })
    }
                
    inputListener(){
        document.querySelectorAll('input').forEach((element)=>{
            element.addEventListener('input', (event)=>{
                let key = event.data
                if(key==","){
                    key = '.'
                }
                if(('0123456789'.includes(key))||key==null){
                    this.view.changeInput(element, this.model.fromNow, this.model.toNow)
                }
                if(!('0123456789'.includes(key))&&key!=null){
                    element.value = element.value.substring(0, element.value.length - 1)
                }
                if(element.value=='00'||(element.value=='0'+key&&key!='0')){
                    element.value = key
                }
                if(key=="."){
                    if(!element.value.includes('.')){
                        element.value = element.value + '.'
                    }
                }
                
            })
        })
    }
  }

export default TodoController;