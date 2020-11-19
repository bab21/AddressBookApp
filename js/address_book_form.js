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