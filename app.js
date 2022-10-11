const titleIn = document.querySelector('#title')
const nameIn = document.querySelector('#name')
const ISBNIn = document.querySelector('#ISBN')
const form = document.querySelector('form')
const data = document.querySelector('#bookData')

data.addEventListener('click', deleteBook)
form.addEventListener('submit', addBook)

function addBook(e) {
    const row = data.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cross = document.createElement('a')
    cross.appendChild(document.createTextNode('X'))
    cross.className = 'blue-text text-darken-2 secondary-content'
    cross.setAttribute('href', '#')
    cell1.innerHTML = titleIn.value;
    cell2.innerHTML = nameIn.value;
    cell3.innerHTML = ISBNIn.value;
    cell4.appendChild(cross) ;
    e.preventDefault()
    titleIn.value = ""
    nameIn.value = ""
    ISBNIn.value = ""
}
function deleteBook(e){
    if(e.target.textContent === "X"){
        if(confirm( "are you sure you want to remove this book?")){
            curBook = e.target.parentElement.parentElement.rowIndex
            data.deleteRow(curBook)
        }
    }
}

