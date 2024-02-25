const prompt = require('prompt-sync')();
const func = require('./Admin');
const Library = require('./data');
const users = require('./dataUser');
const user = require('./Users');
const Admindata = require('./dataAdmin');

function main() {
    console.log("Welcome to the library\n")
    console.log("1-Register\n2-Login\n3-Admin\n");
    let command = prompt("Enter Number of Operation:");

    if (command == 3) {
        adminLogin();
    } else {
        if (command == 1) {
            user.Adduser(users);
        } else if (command == 2) {
            user.Login(users);
        }
        
        userCommands();
    }
}

function adminLogin() {
    let idadmin = prompt("Enter your id:");
    let admin = Admindata.find(admin => admin.id == idadmin);

    if (admin) {
        console.log(`Welcome ${admin.name}`);
        adminCommands();
    } else {
        console.log("Invalid admin ID.");
        main();
    }
}

function adminCommands() {
    do {
        console.log("\t1-[AddBook]-2-[SearchBook]-3-[ShowBooks]-4-[RemoveBook]-5-[EditBook]-6-[ShowUser]-7-[Back]")
        let command = prompt("Enter Number of Operation:");
        console.log("\n");
        manageLibrary(command);
        console.log("\nDo you want to continue?");
        continueOperation = prompt("[yes]-[no]:");
    } while (continueOperation.toLowerCase() === "yes");

    console.log("\nApp Closed");
}

function manageLibrary(command) {
    switch (command) {
        case "1":
            func.AddBook(Library);
            break;
        case "2":
            func.SearchBook(Library);
            break;
        case "3":
            func.ViewAllBooks(Library);
            break;
        case "4":
            func.RemoveBook(Library);
            break;
        case "5":
            func.EditBook(Library);
            break;
        case "6":
            func.ShowUser(users);
            break;
        case "7":
            main();
            break;
        default:
            console.log("Invalid command!");
    }
}

function userCommands() {
    let continueOperation = "no";
    
    do {
        console.log("\t1-[ShowBooks]-2-[BuyBook]-3-[SearchBook]-4-[Back]");
        let command = prompt("Enter Number of Operation:");
        console.log("\n");

        switch (command) {
            case "1":
                func.ViewAllBooks(Library);
                break;
            case "2":
                user.BuyBook(Library, users);
                break;
            case "3":
                func.SearchBook(Library);
                break;
            case "4":
                main();
                break;
            default:
                console.log("Invalid command!");
        }

        console.log("\nDo you want to continue?");
        continueOperation = prompt("[yes]-[no]:");
    } while (continueOperation.toLowerCase() === "yes");

    console.log("\nApp Closed");
}

main();


//1-function add user /done
//2-function search user /done
//3-function show user /done
//4-function login /done
//5-function buying book /dond
//6-function lougout-----------> next

