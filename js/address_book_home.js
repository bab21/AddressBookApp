let addressBookContactList;
window.addEventListener('DOMContentLoaded', (event)=>{
    addressBookContactList = getAddressBookContactFromStorage();
    document.querySelector(".person-count").textContent = addressBookContactList.length;
    createInnerHtml();
});

const getAddressBookContactFromStorage = ()=> {
    return localStorage.getItem('AddressBookContactList')?
                        JSON.parse(localStorage.getItem('AddressBookContactList')):[];

}
const remove = (node) => {
    console.log("call removbe");
    console.log("node id .."+parseInt(node.id));
    let addressBookContact =addressBookContactList.find(personData => personData._id==node.id);
    console.log("data to remove "+addressBookContact);
    if(!addressBookContact) return;
    const index = addressBookContactList
                .map(personData => personData._id)
                .indexOf(addressBookContact._id);

    addressBookContactList.splice(index,1);
    localStorage.setItem("AddressBookContactList",JSON.stringify(addressBookContactList));
    document.querySelector(".person-count").textContent = addressBookContactList.length;
    createInnerHtml();
}

const createInnerHtml= () => {
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th>"+
                     "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    // let addressBookContactList = createAddressBookContactJSON();
    for(const addressBookContact of addressBookContactList){
        innerHtml = `${innerHtml}
            <tr>
                <td>${addressBookContact._fullName}</td>
                <td>${addressBookContact._address}</td>
                <td>${addressBookContact._city}</td>
                <td>${addressBookContact._state}</td>
                <td>${addressBookContact._zipCode}</td>
                <td>${addressBookContact._phoneNumber}</td>
                <td>
                    <img id="${addressBookContact._id}" onclick="remove(this)" alt="delete"
                            src="../assets/delete-black-18dp.svg">
                    <img id="${addressBookContact._id}" alt="edit" onclick="update(this)"
                            src="../assets/create-black-18dp.svg">        
                </td>
            </tr>
            `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

const createAddressBookContactJSON = ()=>{
    let addressBookContactListLocal =[
        {
            _fullName:'Sagar Yadav',
            _address: 'Uday Chawk Indrapuri',
            _city: 'Patna',
            _state: 'Bihar',
            _zipCode: '800024',
            _phoneNumber: '8899009988',
            _id: 1
        },
        {
            _fullName:'Suruchi Singh',
            _address: 'Boring Road ',
            _city: 'Patna',
            _state: 'Bihar',
            _zipCode: '800016',
            _phoneNumber: '8896609988',
            _id: 2

        }
    ];
    return addressBookContactListLocal;
}