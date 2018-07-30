export function introFilter(value){
    var temp = '';
    value.map((item,index)=>{
        temp += item
        if(index != value.length-1){
            temp += '|'
        }
    })
    return temp
}

