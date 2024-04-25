const todoList2 = JSON.parse(localStorage.getItem('todoList')) || [];
let count = 0; 

renderTodoList();


document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo2();
  });

function addTodo2(){
  const inputElement = document.querySelector('.js-name-input2');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.valueAsDate;
  document.querySelector('.js-date-error').innerHTML = ``;
  
  if(name === '' || dueDate === null){
    document.querySelector('.js-date-error').innerHTML = `You need to insert an name and an date for create a task`;
  } else if(name !== '' && dueDate !== null){

    const q = new Date();
    const m = q.getMonth();
    const d = q.getDate();
    const y = q.getFullYear();
    const currentDate = new Date(y,m,d);

    const myDate = new Date(dueDate.getUTCFullYear(), 
                            dueDate.getUTCMonth(), 
                            dueDate.getUTCDate());
    
    //console.log(myDate);
    //console.log(currentDate);
  
    if(myDate.getTime() >= currentDate.getTime()){
      todoList2.push({
        name: name, 
        dueDate: myDate.toLocaleDateString()
      });
    
      inputElement.value = '';
      dateInputElement.value = '';

      saveHistory();

      renderTodoList();
    } else {
      document.querySelector('.js-date-error').innerHTML = `It's not possible set a To Do for a date before than today.`;
      dateInputElement.value = '';
    }
    
  }
}

function saveHistory(){
  localStorage.setItem('todoList', JSON.stringify(todoList2)); 
}



function renderTodoList(){
  let todoListHTML = '';

  todoList2.forEach((todoObject, index) => {

    const {name, dueDate, done} = todoObject;
    const html = `
      <div id="name-id" class="name ${done ? 'is-done' : ''}">${name}</div>
      <div class="due-date ${done ? 'is-done' : ''}">${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      <input type="checkbox" class="js-checkbox checkbox" ${done ? 'checked' : ''}>
    `; //Generation the HTML using JavaScript
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList2.splice(index, 1);
        saveHistory();
        renderTodoList();
      });
    });

  //Resolver bug
  document.querySelectorAll('.js-checkbox')
    .forEach((checkbox, index) => {
      checkbox.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        //todoList2[index].done = checkbox.checked;
        todoList2[index].done = !todoList2[index].done;
        // console.log(todoList2[index]);
        // console.log(checkbox.checked);
        if(checkbox.checked){
          // document.querySelector('.name')
          //   .classList.remove('is-done');
          // document.querySelector('.due-date')
          //   .classList.remove('is-done');
          arrayMove(todoList2, index, 0);
          
        } else if(!checkbox.checked){
          //Nao estava funcionando porque sempre renderizamos a tela no inicio do programa e a class definida era 'name' (saia a atualizacao para incluir a outra classe)
          // document.querySelector('.name')
          //   .classList.add('is-done');
          // document.querySelector('.due-date')
          //   .classList.add('is-done');
          arrayMove(todoList2, index, todoList2.length);
          
        } 
        //console.log(document.querySelector('.name'));
        saveHistory();
        renderTodoList();
     });
    });

    // console.log(todoListHTML);

}

function arrayMove(array, oldIndex, newIndex){
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}


// possibilties to do more than one list
// 1. add a name to each list
// 2. input box to add a new list
// 3. change or duplicate the code to add a new list
// 4. possibility to expande or close the list


// function newTodoList(){
//   //Use object and for each -> the ideia is to add a new list inside the object, and every time we reflesh the page, show all the lists

//   const todoLists = [
//     list1 = [
//       {name: 'Do the dishes', dueDate: '1/10/2024', done: true},
//       {name: 'Assignment 1', dueDate: '1/20/2024', done: false}
//     ],
//     list2 = [
//       {name: 'Do the dishes', dueDate: '1/10/2024', done: true},
//       {name: 'Assignment 1', dueDate: '1/20/2024', done: false}
//     ]    
//   ];

//   for(let i = 0; i < todoLists.length; i++){
//     const array = todoLists[i];
//     array.forEach((todoObject, index) => {
    
//       const {name, dueDate, done} = todoObject;
//       console.log(name, dueDate, done);
//       const html = `
//         <div class="js-todo-list-title todo-list-title"></div>

//         <div id="name-id" class="name ${done ? 'is-done' : ''}">${name}</div>
//         <div class="due-date ${done ? 'is-done' : ''}">${dueDate}</div>
//         <button class="delete-todo-button js-delete-todo-button">Delete</button>
//         <input type="checkbox" class="js-checkbox checkbox" ${done ? 'checked' : ''}>
//       `; //Generation the HTML using JavaScript
//       todoListHTML += html;

//       // document.querySelector('.')
//       //   .innerHTML = 

//       // document.querySelector('.js-todo-list-title')
//       //   .innerHTML = 
 

//     })
//   }
// }


//newTodoList();
//console.log(todoList2);

// function newTodoList(){
//   let newTodoListHTML = '';

//   const html = `
//     <div class="todo-input-grid">
//       <input placeholder="To Do List name"
//         class="js-list-name-input1 list-name-input">
//       <button class="js-add-todo-list-button${count} add-todo-list-button">Add</button>
//     </div>
//     <p class="js-date-error${count} date-error"></p>
//     <div class="js-todo-list${count} todo-grid"></div>`;

//   newTodoListHTML += html;

//   document.querySelector('.js-new-todo-list')
//     .innerHTML = newTodoListHTML;


//   //criar novo array when press the button
//   document.querySelector(`.js-add-todo-list-button${count}`)
//     .addEventListener('click', () => {
//       addList();
//     });







//   count++;
// }



// function addList(){
//   let newListHTML = '';

//   //passar nome da lista
//   const html = `
//     <div class="js-todo-list-title${count} todo-list-title"></div>
//     <div class="todo-input-grid">
//       <input placeholder="To do name"
//         class="js-name-input${count} name-input">
//       <input type="date"
//         class="js-due-date-input${count} due-date-input">
//       <button class="add-todo-button js-add-todo-button${count}">Add</button>
//       <div class="done-title">Done</div>
//     </div>
//     <p class="js-date-error${count} date-error"></p>
//     <div class="js-todo-list${count} todo-grid"></div>`;

//     newListHTML += html;

//     const div = document.body.appendChild(document.createElement("div"));
//     div.classList.add(`js-list${count}`);

//     let listName = document.querySelector(`.js-list-name-input1`).value;
//     document.querySelector(`.js-todo-list-title${count}`)
//       .innerHTML = listName;


//     document.querySelector(`.js-list${count}`)
//       .innerHTML = newListHTML;
// }
