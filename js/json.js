const user={id:1,name:'Gorib Aamir',job:'actor'};
//Javascript Object Notation (json);
const stringified=JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop={
    owner:'Alia',
    address:{
        street:'dolfin-goli',
        city:'ranbir',
        country:'BD'
    },
    products:['laptop','mic','monitor','keybord'],
    revenue:45000,
    isopen:true,
    isNew:false
}
console.log(shop);
const shopJSON=JSON.stringify(shop);
console.log(shopJSON);