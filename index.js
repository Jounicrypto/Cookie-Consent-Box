const cookiesBox = document.querySelector(".wrapper"),
acceptBtn = cookiesBox.querySelector("button");

acceptBtn.onclick = () => {
    //Setting Cookies for 1 month, after 1 month cookies will be expired automatically
    document.cookie = "CookieBy=CodingJouni; max-age="+60*60*24*30;
    if (document.cookie) {//if the cookies set
        cookiesBox.classList.add("hide");//hide cookies box once cookies set
    }else{
        alert("Cookies can't be set!");
    }
}
//hide the cookies box if cookies is set and not expired
let checkCookie = document.cookie.indexOf("CookieBy=CodingJouni");//checking cookies set
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookiesBox.classList.add("hide"): cookiesBox.classList.remove("hide");