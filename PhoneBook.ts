import { Contact, IPhoneBook } from './models';

export class PhoneBook implements IPhoneBook {
    phoneBook: Contact[];
    constructor(){
        this.phoneBook = [];
    }
    addContact(name: string, number: string): void {
        var numberExists = this.numberAlreadyExists(number);
        if(!numberExists) {
            console.log(numberExists);
            this.phoneBook.push({
                name: name,
                number: number
            } as Contact)
        }else{
            console.log(name);
            throw new Error("Phone number already exists");
        }
    }
    contactsByNumber(number: string): Contact[] {
        return this.phoneBook.filter(contact => {
            if(contact.number.includes(number)){
                return true;
            }
        })
    }
    contactsByName(name: string): Contact[] {
        return this.phoneBook.filter(contact => {
            if(contact.name === name){
                return true;
            }
        })
    }

    numberAlreadyExists(number: string): boolean {
        var duplicateNumber = false ;
        this.phoneBook.forEach(contact => {
            if (contact.number === number) {
                duplicateNumber = true;
            }
        });
        return duplicateNumber;
    }
}