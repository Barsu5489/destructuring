//object destructuring



// const person= {
// name: 'Barsu',
// age: 23,
// location :{
//     city:'Kisumu',
//     temp:46
// }
// }
// const {name, age} = person
// console.log(`${name} is ${age}`)
// const {city, temp}=person.location
// console.log (`it is ${temp} in ${city}`)


// const book = {
//     title:'Courage to be disliked',
// author:'Ichiro Kishimi',
// publisher:{
//    // name:''
// }

// };

// const{name:publisherName ='self-published'}=book.publisher

//     console.log(`book was published by ${publisherName}`)


//array destructuring

const address = ['kisumu','kisumu-busia-road','Lela','Kenya']

const [city,road,town,country] = address
console.log(`i live in ${city,road}`)