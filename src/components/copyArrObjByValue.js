
const copyArrObjByValue = (data)=>{
    var ar2 = []; // create empty array to hold copy

    for (var i = 0, len = data.length; i < len; i++) {
        ar2[i] = {}; // empty object to hold properties added below
        for (var prop in data[i]) {
            ar2[i][prop] = data[i][prop]; // copy properties from arObj to ar2
        }
    }
return ar2

}

export default copyArrObjByValue