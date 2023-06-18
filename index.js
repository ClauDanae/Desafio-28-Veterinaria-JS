// Leer las variables que se pasan por terminal
const { readCitas, recordCitas } = require('./operaciones.js')
const arguments = process.argv.slice(2)
const fileName = 'citas.json'
const operation = arguments[0]
const animal_name = arguments[1]
const years_old = arguments[2]
const animal_kind = arguments[3]
const animal_color = arguments[4]
const disease = arguments[5]
const content = [
    {
        animal_name,
        years_old,
        animal_kind,
        animal_color,
        disease
    }
]
//Operaciones desde la terminal
if (operation == 'registrar') {
    recordCitas(fileName, content)
}
else if (operation == 'leer') {
    readCitas(fileName)
} else {
    console.log('Solo tenemos 2 métodos: \n-Leer\n-Registrar')
} 