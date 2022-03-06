import { Contact } from "./models";

export interface IPhoneBook{
    addContact(name: String, number: String) : void;
    contactsByNumber(number: String) : Contact[]; 
    contactsByName(name: String): Contact[];
}