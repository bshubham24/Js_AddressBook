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
try {
   let contact1 = new contacts("Shubham","Bhawsar","whitestreet","bhopal","MadhyaPradesh","456321","91 9874563114","shubh@gmail.com");
   let contact2 = new contacts("Shubh","Bhawsa","whitestrt","bhopali","MadhyaPrad","456321","91 9874563114","shubham@gmail.com");
   let contact3 = new contacts("Hubham","Bhaar","witestreet","bhoal","Madhradesh","456321","91 9874563114","shubhbhawsar@gmail.com");
   addressBook.push(contact1.toString());
   addressBook.push(contact2.toString());
   addressBook.push(contact3.toString());
    console.log(addressBook); 
} catch (error) {
    console.log(error);
}
