import todoModel from './todo.model.js';
import todoView from './todo.view.js';


class todoController {
    constructor() {
        this.model = new todoModel()
        this.view = new todoView()
        this.view.showTodos(this.model.todos)
        this.eventListener()
        this.navbarListener()
    }

    navbarListener(){
        document.querySelectorAll('.navbar__list_item').forEach((element)=>{
            element.addEventListener('click', ()=>{
                document.querySelector('.navbar__list_item-selected').className = "navbar__list_item"
                element.className = "navbar__list_item navbar__list_item-selected" 
                
            })
        })
    }

    eventListener(){
        document.querySelector('main').addEventListener('click', (event)=>{
            if(event.target.className=="container__button_text" || event.target.className=="container__button_first" 
            || event.target.className=="container__button_second"){
                this.addButton()
            }
            else if(event.target.className=="container__todos_delete"){
                this.deleteButton(event.target)
            }
            else if(event.target.className=="container__todos_input"){
                this.inputListener()
            }
            else if(event.target.className.includes("container__sort")){
                this.sortButton()
            }
        })
    }

    inputListener(){
        document.querySelectorAll('.container__todos_input').forEach((element)=>{
            element.addEventListener('input', (event)=>{
                this.editButton(element, event.target.value)
            })
        })
    }
    addButton(){
        this.model.addTodo()
    }

    sortButton(){
        if(document.querySelector('.container__sort').className =="container__sort container__sort_asc")
        {
            document.querySelector('.container__sort').classList = 'container__sort container__sort_desc'
            this.model.sortTodosAsc()
        } 
        else
        {
            document.querySelector('.container__sort').classList = "container__sort container__sort_asc"
            this.model.sortTodosDesc()
        }
    }

    deleteButton(event){
        this.model.deleteTodo(Array.from(event.parentNode.parentNode.children).indexOf(event.parentNode)+1)
    }

    editButton(event, eventl){
        this.model.editTodo(Array.from(event.parentNode.parentNode.children).indexOf(event.parentNode)+1, eventl)        
    }
  }

export default todoController;