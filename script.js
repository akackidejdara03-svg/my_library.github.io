let self_btn = document.querySelector('.self')

let self_info = document.querySelector("#self-info")

self_btn.addEventListener('click', function() {
    self_info.scrollIntoView({
        behavior: 'smooth'
    })
})

let library_info = document.querySelector("#library-info")
let btn_book = document.querySelector('.btn-book')
let btn = document.querySelector('.button')

btn_book.addEventListener('click', function() {
    library_info.scrollIntoView({
        behavior: 'smooth'
    })
})

btn.addEventListener('click', function() {
    library_info.scrollIntoView({
        behavior: 'smooth'
    })
})


let books = document.querySelectorAll('.book')
console.log(books)
let OPEN = false
let desc_books = document.querySelectorAll('.desc-book')
console.log(desc_books)

for (let i = 0; i < books.length; i += 1) {
    books[i].addEventListener('click', function() {
        let desc_book = books[i].querySelector('.desc-book')
        if (OPEN) {
            desc_book.style.display = 'none'
            OPEN = false
        }
        else {
            desc_book.style.display = 'block'
            OPEN = true
        }
    })
}

