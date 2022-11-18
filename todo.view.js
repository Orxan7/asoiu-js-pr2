var list = document.querySelector('.container__todos_list');

class todoView {
    constructor(){}

    showTodos(todos){
        list.innerHTML = ""
        for(let i=0; i<todos.length; i++){
            let listItem = document.createElement('li');
            listItem.classList = 'container__todos_item';
            listItem.innerHTML = `<input type="text" class="container__todos_input" value="">
            <div class="container__todos_delete"></div>`;
            listItem.querySelector('input').value = todos[i]['text'];
            list.append(listItem)
        }
    }
}

export default todoView;