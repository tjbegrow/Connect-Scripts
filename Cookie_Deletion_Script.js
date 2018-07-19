var cookieArray = document.cookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
        var index = cookieArray[i].indexOf("=")
        var str = [cookieArray[i].substring(0, index), cookieArray[i].substring(index)]
        document.cookie = str[0] + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=.pb.com;";
}