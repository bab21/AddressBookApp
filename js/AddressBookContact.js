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

    set phoneNumber(phoneNumber){
        let phoneNumberRegex=RegExp("[0-9]{2}[\\s][0-9]{10}");
        if(phoneNumberRegex.test(phoneNumber)){
            this._phoneNumber=phoneNumber;
        }
        else throw "Phone Number invalid!";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }

    set address(address){
        console.log(" in address "+address);
        let addressWordRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        let addressWords = address.split(" ");
        for(const word in addressWords){
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
}