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
    console.log("calling save ");
    try{
        let addressBookContact = createAddressBookContact();
        createAndUpdateStorage(addressBookContact);
        window.location.replace(site_properties.home_page);
    }catch(e){
        console.log("error in save");
        return;
    }
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

function createAndUpdateStorage(addressBookContact){
    let addressBookContactList= JSON.parse(localStorage.getItem("AddressBookContactList"));
    if(addressBookContactList!=undefined){
        addressBookContactList.push(addressBookContact);
    }else{
        addressBookContactList=[addressBookContact];
    }
    alert(addressBookContactList.toString());
    localStorage.setItem("AddressBookContactList",JSON.stringify(addressBookContactList));
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
