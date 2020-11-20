class AddressBookContact{
    set id(id){
        let idRegex=RegExp('[0-9]{1}[0-9]{0,}$');
        if(idRegex.test(id)){
            this._id=id;
        }else throw "id is invalid";
    }
    get id(){
        return this._id;
    }
    set fullName(fullName){
        console.log("full name   ... "+fullName)
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(fullName)){
            this._fullName=fullName;
        }
        else throw "Name is incorrect!";
    }
    get fullName(){
        return this._fullName;
    }

    set city(city){
        this._city=city;
    }
    get city(){
        return this._city;
    }
    set state(state){
        this._state=state;
    }
    get state(){
        return this._state;
    }
    set zipCode(zipCode){
        this._zipCode=zipCode;
    }
    get zipCode(){
        return this._zipCode;
    }
    set phoneNumber(phoneNumber){
        let phoneNumberRegex1=RegExp("^[0-9]{2}[\\s][0-9]{10}$");
        let phoneNumberRegex2=RegExp("^[0-9]{1}[0-9]{9}$");
        if(phoneNumberRegex1.test(phoneNumber) || phoneNumberRegex2.test(phoneNumber)){
            this._phoneNumber=phoneNumber;
        }
        else throw "Phone Number invalid!";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }

    set address(address){
        console.log(" in address "+address);
        let addressWordRegex=RegExp('^[a-zA-Z0-9@/,]{2,}$');
        let addressWords = address.split(" ");
        console.log(addressWords);
        for(const word of addressWords){
            console.log("array valu is "+word);
            if(!addressWordRegex.test(word))
            {   console.log("value   .. "+word);
                throw "address is invalid";
            }
        }
        this._address= address;
    }
    get address(){
        return this._address;
    }
    toString(){
        return "Full Name ="+this.fullName+" Address ="+this.address+" City ="+this.city+" State = "+this.state+
        " Phone number = "+this.phoneNumber+"Zip Code "+this.zipCode;
    }
}