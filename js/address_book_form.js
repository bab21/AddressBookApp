let isUpdate = false;
let addressBookContactObj ={};

window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector("#fullName");
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new AddressBookContact()).fullName=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
    
    const phoneNumber=document.querySelector('#tel');
    const telError=document.querySelector('.tel-error');
    phoneNumber.addEventListener('input',function(){
        if(phoneNumber.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new AddressBookContact()).phoneNumber=phoneNumber.value;
            telError.textContent="";
        }catch(e){
            telError.textContent=e;
        }
    });

    const address=document.querySelector('#address');
    const addressError=document.querySelector('.address-error');
    address.addEventListener('input',function(){
        if(address.value.length==0){
            addressError.textContent="";
            return;
        }
        try{
            (new AddressBookContact()).address=address.value;
            addressError.textContent="";
        }catch(e){
            addressError.textContent=e;
        }
    });
    checkForUpdate();
    
});

const checkForUpdate = () =>{
    const addressBookContactJson = localStorage.getItem('editPerson');
    isUpdate = addressBookContactJson?true:false;
    if(!isUpdate) return;
    addressBookContactObj = JSON.parse(addressBookContactJson);
    setForm();
}

const setForm = () => {
    setValue('#fullName',addressBookContactObj._fullName);
    setValue('#city',addressBookContactObj._city);
    setValue('#state',addressBookContactObj._state);
    setValue('#address',addressBookContactObj._address);
    setValue('#tel',addressBookContactObj._phoneNumber);
    setValue('#zipCode',addressBookContactObj._zipCode);
}


const save = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    console.log("calling save ");
    try{
        setAddressBookContactObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    }catch(e){
        console.log("error"+e);
        console.log("error in save");
        return;
    }
}

const setAddressBookContactObject =()=>{
    addressBookContactObj._fullName=getInputValueById('#fullName');
    addressBookContactObj._address =getInputValueById('#address');
    addressBookContactObj._city= getInputValueById('#city');
    addressBookContactObj._state= getInputValueById('#state');
    addressBookContactObj._zipCode= getInputValueById('#zipCode');
    addressBookContactObj._phoneNumber= getInputValueById('#tel');

    console.log(addressBookContactObj.toString());
}

const resetForm = (event)=>{
    setValue('#fullName','');
    setValue('#state','Bihar');
    setValue('#city','Patna');
    setValue('#tel','');
    setValue('#zipCode','');
    setValue('#address','');
}

const setValue =(id,value)=>{
    const element = document.querySelector(id);
    element.value=value;
}

function createAndUpdateStorage(){
    let addressBookContactList= JSON.parse(localStorage.getItem("AddressBookContactList"));
    if(addressBookContactList){
        let addressBookContact= addressBookContactList.
                                find(personData => personData._id == addressBookContactObj._id);
         
        if(!addressBookContact){
            addressBookContactList.push(createAddressBookContact());

        }else{
            const index= addressBookContactList
                            .map(personData => personData._id)
                            .indexOf(addressBookContact._id);
            addressBookContactList.splice(index,1,creteAddressBookContactData(addressBookContact._id));
        }
    }else{
        addressBookContactList = [createAddressBookContact()];
    }
    localStorage.setItem("AddressBookContactList",JSON.stringify(addressBookContactList));
}

const creteAddressBookContactData = (id) => {
    let addressBookContact =new AddressBookContact();
    if(!id) addressBookContact.id = createNewPersonId();
    else addressBookContact.id=id;
    setAddressBookContact(addressBookContact);
    return addressBookContact;
}

const createNewPersonId = () =>{
    let personID = localStorage.getItem('PersoneID');
    personID = !empID?1:(parseInt(personID)+1).toString();
    localStorage.setItem("PersonID",personID);
    return personID;
}

const setAddressBookContact = (addressBookContact)=>{
    try{
        addressBookContact.fullName = addressBookContactObj._fullName;
    }catch(e){
        throw e;
    }
    addressBookContact.city = addressBookContactObj._city;
    addressBookContact.state = addressBookContactObj._state;
    addressBookContact.address = addressBookContactObj._address;
    addressBookContact.zipCode = addressBookContactObj._zipCode;
    try{
        addressBookContact.phoneNumber = addressBookContactObj._phoneNumber;
    }catch(e){
        throw e;
    }

    alert(addressBookContact.toString());
}

const createAddressBookContact = () =>{
    let addressBookContact=new AddressBookContact();
    try{
        addressBookContact.fullName=getInputValueById('#fullName');
        console.log("name entered is "+addressBookContact.fullName);
    }catch(e){
        console.log( e);
    }
    try{
        addressBookContact.address=getInputValueById('#address');
    }catch(e){
        console.log( e);
    }
    try{
        addressBookContact.phoneNumber=getInputValueById('#tel');
    }catch(e){

    }
    addressBookContact.state=getInputValueById('#state');
    addressBookContact.city=getInputValueById('#city');
    addressBookContact.zipCode=getInputValueById('#zipCode');
    addressBookContact.id=getMaxValueOfContactID()+1;
    alert(addressBookContact.toString());
    return addressBookContact;
}
 
const getMaxValueOfContactID =()=>{
    addressBookContactList =  getEmployeePayrollDataFromStorage();
    let max = addressBookContactList
                .map(personData => personData._id)
                .reduce(function(a, b) {
                    return Math.max(a, b);
                });
    return max;
}


const getInputValueById = (id) =>{
    let value=document.querySelector(id).value;
    return value;
}

const getEmployeePayrollDataFromStorage = ()=> {
    return localStorage.getItem('AddressBookContactList')?
                        JSON.parse(localStorage.getItem('AddressBookContactList')):[];

}
