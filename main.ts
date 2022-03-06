import { PhoneBook } from "./PhoneBook";

const DATA = [
["Nicholas","071653488"],
["Joseph","077339727"],
["David","07732913"],
["Sophia","077959114"],
["Christopher","070556447"],
["Chloe","076481682"],
["Ashley","076522077"],
["Chloe","070332432"],
["Ethan","075278452"],
["Grace","078952211"],
["Grace","078952211"]
]

var phoneBook = new PhoneBook;
DATA.forEach(contact => phoneBook.addContact(contact[0],contact[1]))
console.log(phoneBook.contactsByName("Grace"));