oStatus = {

    set : function(){
        var len = arguments.length;
        var ret = {};
        for (var i=1; i<len; i++) {
            for (p in arguments[i]) {
                if (arguments[i].hasOwnProperty(p)) {
                    ret[p] = arguments[i][p];
                }
            }
        }
        return ret;
    },
    update : function(){
        var len = arguments.length;
        var ret =  arguments[0];
        for (var i=1; i<len; i++) {
            for (p in ret) {
                if (arguments[i].hasOwnProperty(p)) {
                    ret[p] = arguments[i][p];
                    if (ret[p] === 'on') {ret[p] = true;}
                }
            }
        }
        return ret;
    },
}
