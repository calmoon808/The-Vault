'use strict';
module.exports = function() {
    let newKey;
    let newValue;
    return {
        setValue: function(key, value){
            newKey = key;
            newValue = value;
        },
        getValue: function(key){
            if (!key || key !== newKey){
                return null;
            }
            return newValue;
        }
    }
}