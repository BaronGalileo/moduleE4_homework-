// Практика 2

const person = {
   city: 'Gomel',
   cantry: 'RB'
 }

 const gitel = Object.create(person)

 gitel.a = 1
 gitel.b =2
 gitel.c =3
 gitel.d = 4

function showObjectIf(str, obj) {
    for(let key in obj){
        if(obj.hasOwnProperty(key)){

            if(key === str)
            return console.log('True')
            }
            else
            return console.log('False')

            }
}


showObjectIf('b', gitel)