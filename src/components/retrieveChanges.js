
const retrieveChanges = (shift, oldShift) => {
var i = 0
var data = new Object()
var arr =[]

shift.map((element)=>{
    if (element.starttime !==oldShift[i].starttime){
        
        data.starttime = element.starttime;
    }
    if (element.endtime !== oldShift[i].endtime){
        
        data.endtime = element.endtime;
    }
    if (Object.keys(data).length >0){
        data.id = element.id
        arr.push(data)
        i++
        data = new Object()
    }
        
})
return arr
}

export default retrieveChanges