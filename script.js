const initLikes = 249
const initDislikes = 11

let likesCount = initLikes
let dislikesCount = initDislikes

let likeBtn = document.getElementById('likeBtn')
let dislikeBtn = document.getElementById('dislikeBtn')

likeBtn.innerText = "👍" + likesCount
dislikeBtn.innerText = "👎" + dislikesCount

function like() {
    likesCount++
    likeBtn.innerText = "👍" + likesCount
    disableBtn()
    setCookie()
}

function dislike() {
    dislikesCount++
    dislikeBtn.innerText = "👎" + dislikesCount
    disableBtn()
    setCookie()
}

function disableBtn() {
    likeBtn.disabled = true
    dislikeBtn.disabled = true
}

function setCookie() {
    document.cookie = "voted=true; SameSite=Strict; Max-Age="+60
}

window.onload = () => {
    if (document.cookie && document.cookie.indexOf('voted')> -1)
    disableBtn()
}