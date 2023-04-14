
//===============COOKIES VS SESSION STORAGE VS LOCAL STORAGE

//LOCALSTORAGE
//localStorage.setItem('name','Rana');
//to get the value from localstorage
//localStorage.getItem('name');
//to remove from localStorage
//localStorage.removeItem('name');

// SESSION STORAGE

// sessionStorage.setItem('email','ranasingh@gmail.com');
// console.log(sessionStorage.getItem('email'));
// sessionStorage.removeItem('email');

//COOKIES
// document.cookie = "username=John Doe";
// document.cookie = 'name=rana; expires=' + new Date(2023,0,04).toUTCString();
// document.cookie = 'lstname=singh';

//ASSIGNMENT

function saveToLocalStorage(event){
    event.preventDefault();
    
    const name = event.target.username.value;
    const emailId = event.target.email.value;
    const phonenumber = event.target.usercontact.value;
    const timeOfCall = event.target.datetime.value;
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',emailId);
    // localStorage.setItem('contact',phonenumber);
    // localStorage.setItem('callhrs',timeOfCall);
    const obj = {
        name:name,
        email:emailId,
        contact:phonenumber,
        callhrs:timeOfCall
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showUsersOnScreen(obj);

function showUsersOnScreen(obj){
    const parentElement = document.getElementById('listOfItems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.name+" "+obj.email;
}
};