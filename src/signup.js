const form = document.querySelector('#loginForm')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const confirmPasswordInput = document.querySelector('#confirmPassword')

form.onsubmit = e => {
    e.preventDefault()

    const authors = localStorage.getItem("authors")
    const authors_json = JSON.parse(authors)
    console.log(authors_json)
    const username = usernameInput.value 
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value
    
    const isUsernameUnique = authors_json.every(author => username !== author.author)
    console.log(isUsernameUnique)
    // const findBiggestId = authors_json.reduce((prev_id, id) => prev_id > id ? prev_id : id)
    let biggestId = 0
    authors_json.forEach((author) => {
        if (author.id >= biggestId) {
            biggestId = author.id
        }
    })
    console.log(biggestId)
    if (!isUsernameUnique) {
        // problem
        console.log("username is already in use")
        console.log("Please use different username")
    } else if (username.length < 3) {
        console.log("Username is so short please have at least 3 character")
    } else if (password.length < 5) {
        // problem
        console.log("passwords should be bigger than 4")
    } else if (password !== confirmPassword) {
        console.log("Passwords are not equal")
    } else if (username === password) {
        console.log("Username should not be equal to password")
    } else {
        console.log("Please wait user is created")
        const yourId = biggestId + 1
        authors_json.push({
            id: yourId,
            author: username,
            password: password
        })
        
        console.log(authors_json)
        localStorage.setItem("authors", JSON.stringify(authors_json))
        console.log
    }
}
