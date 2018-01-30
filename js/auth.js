function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function auth(page, option, redirect) {
    if (!localStorage.getItem("au")) {
        window.location = "/login.html";
        return false;
    }
    switch (page) {
        case "index":
            return true;
        case "account":
            return true;
        default:
            var user = JSON.parse(localStorage.getItem("au"));
            var privilege_key = (option) ? ["a", page, option].join("_") : ["a", page].join("_");
            if (user[privilege_key] == 0) {
                window.location = "/AuthError.html?redirect=" + (redirect ? redirect : window.location.pathname.substr(1));
                return false;
            } else {
                return true;
            }
    }
}