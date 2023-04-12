
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
document.cookie = "username=John Doe";
document.cookie = 'name=rana; expires=' + new Date(2023,0,04).toUTCString();
document.cookie = 'lstname=singh';