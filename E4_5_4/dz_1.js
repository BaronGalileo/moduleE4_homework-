//// Практика 1

 const person = {
   city: 'Gomel',
   cantry: 'RB'
 }

 const gitel = Object.create(person)

 gitel.a = 1
 gitel.b =2
 gitel.c =3
 gitel.d = 4

function showObject(obj) {
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
        console.log(`Ключи: ${key} Значения: ${obj[key]}`)
        }
    }
}
showObject(gitel)
console.log(gitel.city)