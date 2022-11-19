import todoView from './todo.view.js';


class todoController {
    constructor() {
        this.view = new todoView()
        this.eventListener()
    }


    eventListener(){
        this.view.rightCurrency(document.querySelector('.convert__to_list .convert__list_selected'))
        this.view.leftCurrency(document.querySelector('.convert__from_list .convert__list_selected'))
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
        document.querySelectorAll('.convert__list_item').forEach(element =>{
            element.addEventListener('click', ()=>{
                if(element.parentElement.className.includes('from'))
                {
                    this.view.leftCurrency(element)
                }
                else if(element.parentElement.className.includes('to'))
                {
                    this.view.rightCurrency(element)
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
                    this.view.changeInput(element)
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

export default todoController;