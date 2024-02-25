const prompt=require('prompt-sync')();
const func = require('./Admin');
let name
let users={
  Adduser:function(users){
    name=prompt("Enter User Name:")
    let pass=prompt("Enter User Password:")
    let phone=prompt("Enter your Phone:")
    let credit=prompt("Enter your Credit:")
    let user={
      name:name,
      pass:pass,
      phone:phone,
      booksbuy:[],
      Mymonye:credit,
    }
      users.push(user);
    
  },

    Login:function(users){
    let name=prompt("Enter User Name:")
    let pass=prompt("Enter User Password:")
    for(let i=0;i<users.length;i++){
      if(users[i].name==name && users[i].pass==pass){
        console.log(`Welcom ${name}`)
        // func.SearchBook(Library)
        //BuyBook(Library,users)
      }else if(users[i].name!=name && users[i].pass==pass ||users[i].name==name && users[i].pass!=pass){
        console.log("Wrong User Name or Password");
      }else if(users[i].name!=name && users[i].pass!=pass){
        console.log("must you register");
        this.Adduser(users);
        //func.SearchBook(Library)
      }
    }
  },
   BuyBook:function(library, users) {
    name = name;
    const userIndex = users.findIndex(user => user.name === name);

    if (userIndex === -1) {
        console.log("User not found. Please enter a valid name.");
        return;
    }

    const numOfBooks = parseInt(prompt("How many books do you want to buy?"));
    if (isNaN(numOfBooks) || numOfBooks <= 0) {
        console.log("Please enter a valid number of books.");
        return;
    }

    for (let j = 0; j < numOfBooks; j++) {
        const bookName = prompt(`Enter the name of book ${j + 1}:`);

        const book = library.find(book => book.BookTitle === bookName);
        if (!book) {
            console.log(`Book "${bookName}" not found in the library.`);
            continue; // 
        }

        if (users[userIndex].Mymonye < book.Price) {
            console.log("You don't have enough credit to buy this book.");
            continue; 
        }

        let discountPercentage = 0;
        if (users[userIndex].booksbuy.length >= 3 && users[userIndex].booksbuy.length < 7) {
            discountPercentage = 10;
        } else if (users[userIndex].booksbuy.length >= 7) {
            discountPercentage = 30;
        }

        const discountFactor = 1 - discountPercentage / 100;
        const priceAfterDiscount = book.Price * discountFactor;

        users[userIndex].Mymonye -= priceAfterDiscount;
        users[userIndex].booksbuy.push(bookName);

        console.log(`Transaction Details for Book ${j + 1}:`);
        console.log(`  Book Name: ${bookName}`);
        console.log(`  Price before discount: ${book.Price}$`);
        console.log(`  Price after discount: ${priceAfterDiscount}$`);
        console.log(`  User: ${name}`);
        console.log(`  Remaining Credit: ${users[userIndex].Mymonye}$`);
    }
},

}

module.exports=users