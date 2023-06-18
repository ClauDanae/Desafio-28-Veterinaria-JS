const fs = require('fs')
 const readcitas = (nameFile)=>{
    const content = fs.readFileSync(nameFile, 'utf8',function (err){
        if (err){
            console.log(err)
        }
        else{
            console.log('File readed')
        }        
    })
    const contentJson = JSON.parse(content)
    console.log(contentJson)

}
const recordcitas = (nameFile, addContent) =>{
    const oldContent = fs.readFileSync(nameFile, 'utf8')
    const newContent = JSON.parse(oldContent).concat(addContent)
    fs.writeFileSync(nameFile, JSON.stringify(newContent), function (err){
        if (err){
            console.log(err)
        }
        else{
            console.log('citas added')
        }   
    })
}
module.exports = { readcitas, recordcitas } 