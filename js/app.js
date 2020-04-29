const form = document.querySelector('.todo__form');
const ul = document.querySelector('.todo__list');
const inputField = document.querySelector('#todo__input');
let  inEdit, tempInput;
let inputText = document.querySelector('.item');

const generateHtml = (todoInput)=>{
    const html = `<li>
    <span class='item'>${todoInput}</span>
    <div class="icon-wrapper">
        <i class="fa fa-pencil-square-o edit" aria-hidden="true"></i>
        <i class="fa fa-trash trash" aria-hidden="true"></i>
    </div>
</li>`;
// ATTACH li to form
    ul.innerHTML += html;
};

form.addEventListener('submit', e => {
    e.preventDefault();

    
    if (inEdit){
        tempInput.innerHTML = form.todo__input.value.trim();
        inEdit = false;
        tempInput.classList.remove('green');
        form.reset();
    } else {
        const todoInput =  form.todo__input.value.trim();
        if (todoInput.length) {
            generateHtml(todoInput);
            form.reset();
        }
    }
});

ul.addEventListener('click', e => {
    if (e.target.classList.contains('trash')){
        e.target.parentElement.parentElement.remove();
    } else 
    if (e.target.classList.contains('edit')) {
        inEdit = true;
         tempInput = e.target.parentElement.previousElementSibling;
        // tempInput = e.target.parentElement.previousElementSibling.
        inputField.value = e.target.parentElement.previousElementSibling.innerHTML;
        tempInput.classList.add('green');
        inputField.focus();
    }
});