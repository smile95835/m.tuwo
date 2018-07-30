import result from './result.json';

export function getResultData(){
    return new Promise((reslove,reject)=>{
        let data = result.subjects.map(item=>{
            return{
                id : item.id,
                genres : item.genres,
                name : item.directors[0].name,
                image : item.images.small,
                title : item.original_title,
                year : item.year
            }            
        });
        reslove(data)
    })
}