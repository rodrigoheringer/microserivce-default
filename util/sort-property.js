
class SortProperty{

    static sortArr(array, property) {
        if (array.length === 1) return array;
    
    
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - 1; j++) {
    
                if (array[j][property] < array[i][property]) {
                    let auxArr = array[i];
                    array[i] = array[j]
                    array[j] = auxArr
                }
            }
        }
        return array;
    
    }
}

module.exports = SortProperty;