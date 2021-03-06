class contacts{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];      
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let fNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if(fNameRegex.test(firstName)){
            this._firstName = firstName;
        }
        else{
            throw "Invalid first name";
            }
    }
    
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if(lNameRegex.test(lastName)){
            this._lastName = lastName;
        }
        else{
            throw "Invalid last name";
        }
     }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$")
        if(addressRegex.test(address)){
            this._address = address;
        }
        else{
            throw "Invalid address";
        }
        }

    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$")
        if(cityRegex.test(city)){
            this._city = city;
        }
        else{
            throw "Invalid city";
        }
        
    }

    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z]{4,}$")
        if(stateRegex.test(state)){
            this._state = state;
        }
        else{
            throw "Invalid state";
        }
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp("^([1-9])[0-9]{2}(\\s)?[0-9]{2}[0-9]$");
        if(zipRegex.test(zip)){
            this._zip = zip;
        }
        else{
            throw "Invalid zip";
        }
       
    }

    get phoneNo() {
        return this._phoneNo;
    }
    set phoneNo(phoneNo) {
        let phoneRegex = RegExp("^[1-9]{1}[0-9]{1}(\\s)[1-9]{1}[0-9]{9}$")
        if(phoneRegex.test(phoneNo)){
            this._phoneNo = phoneNo;
        }
        else{
            throw "Invalid phone number";
        }
      
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");
        if(emailRegex.test(email)){
            this._email = email;
        }
        else{
            throw "Invalid email";
        }
      
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + 
        ", city : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone No : "+ this.phoneNo + ", Email : "+ this.email;
    }
}

let addressBook = new Array(); 

function addContacts(contact){
    if(contactCheck(contact.firstName,contact.lastName)){
        console.log("Contact is already present in the address Book");
    }
    else{
        addressBook.push(contact);
    }
}

function sortContactsByNameOrCityOrStateOrzip(field){
    switch(field){
        case "name":
           addressBook.sort((contact1, contact2) => (contact1.firstName).localeCompare(contact2.firstName));
           console.log(addressBook); 
        break;
        case "city":
            addressBook.sort((contact1, contact2) => (contact1.city).localeCompare(contact2.city));
            console.log(addressBook); 
            break;
        case "state":
            addressBook.sort((contact1, contact2) => (contact1.state).localeCompare(contact2.state));
            console.log(addressBook); 
            break;
        case "zip":
            addressBook.sort((contact1, contact2) => (contact1.zip).localeCompare(contact2.zip));
            console.log(addressBook); 
            break;
        default:
            console.log("Invalid field");
    }
}

function contactCheck(firstName,lastName){
    let isPresent = addressBook.some(contact=>contact.firstName==firstName && contact.lastName==lastName);
    return isPresent;
}

function totalContacts(contactsCounter){
    contactsCounter++;
    return contactsCounter;
}

function findContactUsingName(firstName,lastName){
    if(contactCheck(firstName,lastName)){
    let contact = addressBook.find(contact=>contact.firstName==firstName && contact.lastName==lastName);
    return contact;
    }
   }

function searchPersonInParticularStateOrCity(firstName,lastName,field,value){
    if(contactCheck(firstName,lastName)){
    switch(field){
        case "city":
            if(addressBook.some(contact=> contact.firstName==firstName &&contact.lastName==lastName && contact.city==value)){
                console.log(firstName+" "+lastName+" is present in "+value);
            }
            else{
                console.log(firstName+" "+lastName+" is not present in "+value)
            }
            break;
        case "state":
            if(addressBook.some(contact=> contact.firstName==firstName &&contact.lastName==lastName && contact.state==value)){
                console.log(firstName+" "+lastName+" is present in "+value);
            }
            else{
                console.log(firstName+" "+lastName+" is not present in "+value);
            }
            break;
        default:
            console.log("Invalid field"); 
     }
    }
    else{
        console.log("Person not present in address Book");
    }
}
function viewContactsBasedOnCityOrState(field, value){
     switch(field){
        case "city":
            return addressBook.filter(contact=> contact.city==value);
        case "state":
            return addressBook.filter(contact=> contact.state==value);
        default:
            console.log("Invalid field"); 
     }
}

function personCountByStateOrCity(field,value){
        let countPerson = 0;
        switch(field){
            case "city":
                for(contact of addressBook){
                if(contact.city==value){
                    countPerson++;
                }
                }
                return countPerson;
            case "state":
                for(contact of addressBook){
                    if(contact.state==value){
                        countPerson++;
                    }
                    }
                    return countPerson;
            default:
                console.log("Invalid field"); 
                return "NA";
    }
}

function ediContact(firstName,lastName,field, value){
    let isPresent = contactCheck(firstName,lastName);
    if(isPresent){
       switch(field){
            case "address":
               findContactUsingName(firstName,lastName).address = value;   
               break;     
            case "city":
               findContactUsingName(firstName,lastName).city = value;  
               break;
            case "state":
               findContactUsingName(firstName,lastName).state = value; 
               break;
            case "zip":
               findContactUsingName(firstName,lastName).zip = value;  
               break;
            case "phoneNo":
               findContactUsingName(firstName,lastName).phoneNo = value;   
               break;
            case "email":
               findContactUsingName(firstName,lastName).email = value;
               break; 
            default:
                console.log("Invalid field"); 
            }
    }
    else{
        console.log("Contact is not present");
    }
}

function deleteContact(firstName,lastName){
    if(contactCheck(firstName,lastName)){
       addressBook = addressBook.filter(contact=>contact.firstName!=firstName && contact.lastName!=lastName);
    }
    else{
        console.log("Contact is not present");
    }
}
try {
   let contact1 = new contacts("Shubham","Bhawsar","whitestreet","bhopal","MadhyaPradesh","456321","91 9874563114","shubh@gmail.com");
   let contact2 = new contacts("Shubh","Bhawsa","whitestrt","ahopali","AMadhyaPrad","256321","91 9874563114","shubham@gmail.com");
   let contact3 = new contacts("Hubham","Bhaar","witestreet","sbhoal","BMadhyaPradeshi","956321","91 9874563114","shubhbhawsar@gmail.com");
   let contact4 = new contacts("Aubham","Bhaar","witestreet","kbhoal","ZMadhyaPradeshi","856321","91 9874563114","shubhbhawsar@gmail.com");
   let contact5 = new contacts("Shubha","Bhawsa","whitestreet","ibhopal","KMadhyaPrad","156321","91 9874563114","shubh@gmail.com");
   let contact6 = new contacts("Zubham","Bhaar","witestreet","ubhoal","SMadhyaPradeshi","556321","91 9874563114","shubhbhawsar@gmail.com");
   addContacts(contact1);
   addContacts(contact2);
   addContacts(contact3);
   addContacts(contact4);
   addContacts(contact5);
   addContacts(contact6);
   console.log(addressBook);
   sortContactsByNameOrCityOrStateOrzip("name");
   sortContactsByNameOrCityOrStateOrzip("city");
   sortContactsByNameOrCityOrStateOrzip("state");
   sortContactsByNameOrCityOrStateOrzip("zip");
   sortContactsByNameOrCityOrStateOrzip("email");

} catch (error) {
    console.log(error);
}
