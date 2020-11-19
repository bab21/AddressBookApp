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
    
});

const save = (event)=>{
    console.log("calling save ");
    try{
        let addressBookContact = createAddressBookContact();
        // createAndUpdateStorage(addressBookContact);
    }catch(e){
        console.log("error in save");
        // return;
    }
}

const createAddressBookContact = () =>{
    let addressBookContact=new AddressBookContact();
    try{
        addressBookContact.fullName=getInputValueById('#fullName');
        console.log("name entered is "+addressBookContact.fullName);
    }catch(e){
        // setTextValue('.text-error',e);
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
    alert(addressBookContact.toString());
    return addressBookContact;
}

const getInputValueById = (id) =>{
    let value=document.querySelector(id).value;
    return value;
}
// const getSelectedValues = (propertyValue) =>{
//     let allItems=document.querySelectorAll(propertyValue);
//     let selItems=[];
//     allItems.forEach(item=>{
//         if(item.checked) selItems.push(item.value);
//     });
//     return selItems;
// }
