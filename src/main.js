import { authors } from "./db.js"

console.log(authors)
localStorage.setItem("authors", JSON.stringify(authors))
const authentication = document.querySelector('.authentication')
authentication.innerHTML = `
    <li><a href="login.html">login</a></li>
    <li><a href="signUp.html">Sign Up</a></li>
`

const urlParams = new URLSearchParams(window.location.search)
const author_id = urlParams.get("author_id")
const user = JSON.parse(localStorage.getItem("loggedInUser"))
console.log(user)

console.log(author_id)

if (author_id !== undefined && author_id !== null && user !== undefined && user !== null) {
    console.log(user.author)
    console.log(user.id)
    console.log(author_id)
    if (parseInt(author_id) === user.id) {
        document.querySelector("#username").textContent = user.author
        authentication.innerHTML = `
            <li><a href="index.html" id="logout">logout</a></li>
        `
    }
}

const logout = document.querySelector('#logout')
if (logout) {
    logout.onclick = () => {
        localStorage.removeItem("loggedInUser")
    }
}