const titleIn = document.querySelector('#title')
const nameIn = document.querySelector('#name')
const ISBNIn = document.querySelector('#ISBN')
const form = document.querySelector('form')
const data = document.querySelector('#bookData')

data.addEventListener('click', deleteBook)
form.addEventListener('submit', addBook)
document.addEventListener("DOMContentLoaded", getBooksFromLS)

function addBook(e) {
    const row = data.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const cross = document.createElement('a')
    cross.appendChild(document.createTextNode('X'))
    cross.className = 'blue-text text-darken-2 secondary-content'
    cross.setAttribute('href', '#')
    cell1.innerHTML = titleIn.value
    cell2.innerHTML = nameIn.value
    cell3.innerHTML = ISBNIn.value
    cell4.appendChild(cross)
    const toLSData = [titleIn.value, nameIn.value, ISBNIn.value]
    addBookLS(toLSData)
    titleIn.value = ""
    nameIn.value = ""
    ISBNIn.value = ""
    e.preventDefault()
}
function deleteBook(e){
    let curBooki
    let name = e.target.parentElement.parentElement.children[0].innerText
    let author = e.target.parentElement.parentElement.children[1].innerText
    let ISBN = e.target.parentElement.parentElement.children[2].innerText
    let curBook = [name,author,ISBN]
    if (e.target.textContent === "X") {
        if (confirm("are you sure you want to remove this book?")) {
            curBooki = e.target.parentElement.parentElement.rowIndex
            data.deleteRow(curBooki)
            deleteBookLS(curBook)
        }
    }

}
function addBookLS(book){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
}
function deleteBookLS(book){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.forEach((bookLS, bookIndex) => {
        console.log(bookLS)
        console.log(book)
        const sbookLS = JSON.stringify(bookLS)
        const sbook = JSON.stringify(book)
        if(sbookLS === sbook){
            books.splice(bookIndex, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}
function getBooksFromLS(){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    console.log(books)
    books.forEach((book, bookIndex) => {
        let title = book[0]
        let author = book[1]
        let ISBN = book[2]
        const row = data.insertRow(bookIndex+1)
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        const cross = document.createElement('a')
        cross.appendChild(document.createTextNode('X'))
        cross.className = 'blue-text text-darken-2 secondary-content'
        cross.setAttribute('href', '#')
        cell1.innerHTML = title
        cell2.innerHTML = author
        cell3.innerHTML = ISBN
        cell4.appendChild(cross)
    })
}