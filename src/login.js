import { authors } from "./db.js"

console.log(authors)
const form = document.querySelector('#loginForm')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const submit = document.querySelector('#submit')
form.onsubmit = e => {
    e.preventDefault()
    
    const author = authors.find( ({ author, password }) => author === usernameInput.value && password === passwordInput.value)
    console.log("This is the author bro", author)

    

    if (author !== undefined) {
        localStorage.setItem("loggedInUser", JSON.stringify(author))
        window.location.href = `/index.html?author_id=${author.id}`
    }

}