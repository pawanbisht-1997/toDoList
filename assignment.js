let toDOlist = document.querySelector('.toDOlist');
let inputText;
let getInput = (e) =>{
     inputText = e.value;
}
let addTask = () =>{

  let div = document.createElement('div');    
  div.classList.add('toDoList-Task');
  div.innerHTML = `<h2>${inputText}</h2>
    <i class="fa fa-trash" aria-hidden="true"></i>`;
    toDOlist.appendChild(div);
    inputText = document.getElementById('inputtask');
    inputText.value = '';
    
}











