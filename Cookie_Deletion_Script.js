alert("Cookie values before = " + document.cookie);
var cookieArray = document.cookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
        var index = cookieArray[i].indexOf("=");
        var str = [cookieArray[i].substring(0, index), cookieArray[i].substring(index)];
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=.pitneybowes.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=sendpro.pitneybowes.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=.sendpro.pitneybowes.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/api/foundation/v1/; domain=.sendpro.pitneybowes.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=.pitneybowes.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=.demo.horizon.pitneycloud.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=demo.horizon.pitneycloud.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=.horizon.pitneycloud.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=horizon.pitneycloud.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=.pitneycloud.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/; domain=pitneycloud.com;";
        document.cookie = str[0] + "=; expires=Wed, 01 Jan 1969 00:00:01 GMT; path=/;";
    }
alert("Cookie values after = " + document.cookie); 
//One is unable to delete http only cookies because of security reasons(XXS), so this might not completely help us.
