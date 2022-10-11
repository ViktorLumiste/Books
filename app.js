const titleIn = document.querySelector('#title')
const nameIn = document.querySelector('#name')
const ISBNIn = document.querySelector('#ISBN')
const form = document.querySelector('form')

form.addEventListener('submit', addBook)

function addBook(e) {
    const data = document.querySelector('#bookData')
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
    console.log("ok")
    e.preventDefault()
    titleIn.value = ""
    nameIn.value = ""
    ISBNIn.value = ""
}
// console.log(form)





