let MyStorage = {

    setItem: function(key, value) {

        //check item exist or not

        if (!this.getItem(key)) {
            document.cookie = key + "=" + value + ";path=/;";
            return true
        }
        return false

    },

    getItem: function(key) {

        var key = key + "=";
        var list = document.cookie.split(';');

        for (var i = 0; i < list.length; i++) {

            var value = list[i];

            while (value.charAt(0) == ' ') {
                value = value.substring(1);
            }

            if (value.indexOf(key) == 0) {
                return value.substring(key.length, value.length);
            }
        }
        return null;

    },

    removeItem: function(key) {

        //check if exist or not
        if (!this.getItem(key)) {
            return false
        }
        // add old date so make it expire
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;';
        return true
    },

}

