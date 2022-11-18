import todoView from './todo.view.js';

class todoModel {
  constructor() {
    this.todos = [
      {
        text: ""
      }
      ]
    this.view = new todoView()
  }
  
  addTodo() {
      const todo = {
        text: "",
      }
      
      this.todos.push(todo)
      
      this.view.showTodos(this.todos)
  }
  
  editTodo(id, updatedText) {
      this.todos[id-1]['text'] = updatedText
  }
  
  deleteTodo(id) {
      if(this.todos.length>1){
      this.todos.splice(id-1, 1)      
    }
    else{
      this.todos = [
        {
          text: ""
        }
      ]
    }
    this.view.showTodos(this.todos)
  }

  sortTodosAsc(){
    function asc( a, b ) {
      if ( a.text < b.text ){
        return -1;
      }
      if ( a.text > b.text ){
        return 1;
      }
      return 0;
    }
    
    this.todos.sort(asc)
    this.view.showTodos(this.todos.sort(asc))
  }

  sortTodosDesc(){
    function desc( b, a ) {
      if ( a.text < b.text ){
        return -1;
      }
      if ( a.text > b.text ){
        return 1;
      }
      return 0;
    }
    this.todos.sort(desc)
    this.view.showTodos(this.todos.sort(desc))
  }
    
}

export default todoModel;