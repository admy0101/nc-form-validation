const queries = new URLSearchParams(window.location.search)

const welcomeMsg = document.getElementById("welcome_message")

const img = document.getElementById("avatar")

const firstName = queries.get("first_name")
const lastName = queries.get("last_name")
const username = queries.get("username")
const avatar = queries.get("img_url")

console.log(firstName)
welcomeMsg.innerText += ` ${firstName} ${lastName}, your username is ${username}`

img.src = avatar