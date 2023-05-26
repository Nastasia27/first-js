//1
let firstName = 'Anastasia'
let lastName = 'Kopiika'
let fullName = `${firstName} ${lastName}`
console.log(fullName)

//2
let sideA = '10'
let sideB = '5'
let squareRectangle = sideA * sideB
console.log(squareRectangle)

//3
Math.pow(10,6)

//4
console.log(parseInt(Math.random()*50))

//5
let num = 5
num >= 0 ? console.log('positive value') : console.log('nagative value')

//6
let text  = 'good day for JS'
 if (text.length > 1) console.log(text.charAt(text.length-2))

 //7
 let month = 5
 switch (month) {
    case 1: console.log('January');
    break;
    case 2: console.log('Fabruary');
    break;
    case 3: console.log('March');
    break; 
    case 4: console.log('April');
    break;
    case 5: console.log('May');
    break;
    case 6: console.log('June');
    break;
    case 7: console.log('July');
    break;
    case 8: console.log('August');
    break;
    case 9: console.log('September');
    break;
    case 10: console.log('October');
    break;
    case 11: console.log('November');
    break;
    case 12: console.log('December');
    break;
    default: console.log('Don\'t exist');
 }

 //8
 let password = 'gglll&lhh'
 if (password.length > 5)
   if (password.includes('&') === true) console.log('this password is strong')
   else console.log ('this password is weak')

//9
let numA = 5
let numB = 6
let sum = numA + numB
if (typeof sum === 'number') console.log(sum)
else console.log('Sum of those items cant\'t be counted')

//10
let textOne= 'hhh'
let textTwo= 'ggg'
if (textOne.length === textTwo.length) console.log('those items are strings and they\'re equal')
else console.log('items are not compareble')
