let tempData = "";
/*COMMONJS simple static module example (A pattern not a feature)*/
module.exports = {
    put: function(params) {
        tempData = params;
    },
    get: function () {
        return tempData;
    },
    doIt: function(){
        console.log("Did it ");
    },
    doSomething: function(){
        console.log("Did Something ");
    },
    getIdDone: function(){
    console.log("Got it done ");
    }
};