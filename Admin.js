const prompt=require('prompt-sync')();

let methods={
   AddBook:function(Library){
    let BookId=Library.length+1
    let BookTitle=prompt("Enter BookTitle:")
    let Author=prompt("Enter Author this book:")
    let pages=prompt("Enter pages:")
    let Price=prompt("Enter Price:")
    let Avalible=true;

    Library.push({BookId:BookId,BookTitle:BookTitle,Author:Author,pages:pages,Price:`${Price}$`,Avalible:Avalible})
    console.log(Library);
  },

  EditBook:function(Library) {
    let BookId = Number(prompt("Enter id book you need to edit:"));
    let index = Library.findIndex(x => x.BookId === BookId);
    let num;
    if (index !== -1) { 
      console.log(index);
      num=prompt("Enter Number the the field need to edit:");
      for(let i=1;i<=num;i++){
        let field=prompt("Enter field you need to edit:")
        let value=prompt("Enter the new value:")
        if(field=="BookId"){
          Library[index].BookId=value;
        }else if(field=="BookTitle"){
          Library[index].BookTitle=value;
        }else if(field=="Author"){
          Library[index].Author=value;
        }else if(field=="pages"){
          Library[index].pages=value;
        }else if(field=="Price"){
          Library[index].Price=value;
        }else if(field=="Avalible"){
          Library[index].Avalible=value;
        }
      }

      let book = {
        BookId: Library[index].BookId,
        BookTitle: Library[index].BookTitle,
        Author: Library[index].Author,
        pages: Library[index].pages,
        Price: Library[index].Price,
        Avalible:Library[index].Avalible,
      };

      Library.splice(index, 1, book);

      console.log(Library);
    } else {
      console.log("Book not found in the library.");
    }
  },

  RemoveBook:function(Library) {
    let BookId = Number(prompt("Enter id of the book you need to remove:"));
    let index = Library.findIndex(x => x.BookId === BookId);

    if (index !== -1) {
      Library.splice(index, 1);
      console.log("Book removed. Updated Library:", Library);
    } else {
      console.log("Book not found in the library.");
    }

    return Library;
  },

   ViewAllBooks:function(Library){
    let len=Library.length
    console.log(`All Books in the library:${len}`);
    let count=1
     for(let i=0;i<Library.length;i++){
       console.log(`Book${count++}:`)
       console.log(`  BookId: ${Library[i].BookId}`);
       console.log(`  BookTitle: ${Library[i].BookTitle}`);
       console.log(`  Author: ${Library[i].Author}`);
       console.log(`  Pages: ${Library[i].pages}`);
       console.log(`  Price: ${Library[i].Price}$`);
       console.log(`  Avalible: ${Library[i].Avalible}`);
     }
  },

   SearchBook:function(Library) {
    let search = prompt("Enter 1-[BookTitle] or 2-[BookId] or 3-[Author] you need to search:");
    let books = [];

    if (search == 1) {
      let title = prompt("Enter BookTitle:");
      books = Library.filter((x) => x.BookTitle.toLowerCase() === title.toLowerCase());
    } else if (search == 2) {
      let id = Number(prompt("Enter BookId:"));
      books = Library.filter((x) => x.BookId === id);
    } else if (search == 3) {
      let author = prompt("Enter Author:");
      console.log("Library:", Library); 
      books = Library.filter((x) => x.Author.toLowerCase().includes(author.toLowerCase()));
    }

    if (books.length > 0) {
      console.log("Books found:");
      for (let i = 0; i < books.length; i++) {
        console.log(`Book:`);
        console.log(`  BookId: ${books[i].BookId}`);
        console.log(`  BookTitle: ${books[i].BookTitle}`);
        console.log(`  Author: ${books[i].Author}`);
        console.log(`  Pages: ${books[i].pages}`);
        console.log(`  Price: ${books[i].Price}$`);
        console.log(`  Avalible: ${books[i].Avalible}`);
      }
    } else {
      console.log("No books found matching the search criteria.");
    }
  },
  ShowUser:function (users){
    let numOfuser=users.length
    console.log(`All Users in the system:${numOfuser}`)
    let count=1
     for(let i=0;i<users.length;i++){
       console.log(`Users${count++}:`)
       console.log(`  Name: ${users[i].name}`);
       console.log(`  Password: ${users[i].pass}`);
       console.log(`  Booksbuy: ${users[i].booksbuy}`);
       console.log(`  Credit: ${users[i].Mymonye}$`);
       console.log(`  Phone: ${users[i].phone}`);
     }
  }
}

module.exports=methods