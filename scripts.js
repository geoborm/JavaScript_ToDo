console.log("JavaScript")

var add = document.getElementById("addToDo");
var input = document.getElementById("inputField");
var toDoContainer = document.getElementById("toDoContainer");

add.addEventListener('click', addItem);
input.addEventListener('keypress', function(e){
    if(e.key =="Enter"){
        addItem();
    }
});


function addItem(){
    const item_value = input.value;
    const item = document.createElement('div');
    item.classList.add('item');


    
    const item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    const input_item = document.createElement('input');
    input_item.classList.add('text');
    input_item.type = 'text';
    input_item.value = item_value;
    input_item.setAttribute('readonly', 'readonly');
    input_item.addEventListener('dblclick', function(){
        input_item.style.textDecoration = 'line-through';
    })
    item_content.appendChild(input_item);

    toDoContainer.appendChild(item);
};

function clearInput(e){
    if (e.key === 'Enter'){
        e.preventDefault();
        const input = document.getItemById('inputField');
        input.value = '';
    }
};







