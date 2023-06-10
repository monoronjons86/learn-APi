//  const user={id:1,name:'gorip amair',job:'actor'};
//  //javaScript Object Notation(JSON)
//  const stringified=JSON.stringify(user);
//  console.log(user);
//  console.log(stringified);


// const shop={
//     owner:'Alia',
//     address:{
//         street:'kocukhet vut ar goli',
//         city:'ronbir',
//         country:'bangladesh'
//     },
//     product:['laptop','mic','monitor','keyboard'],
//     revenue:45000,
//     isOpen:true,
// }
// console.log(shop);
// const shopJSON=JSON.stringifyS(shop);
// console.log(shopJSON);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const url='https://jsonplaceholder.typicode.com/users';
// fetch(url)
//     .then(response=>response.json())
//     .then(response=>console.log(response))

function loadData(){
    fetch(url)
        .then(response=>response.json())
        .then(response=>console.log(response))

}