function hello(){
    let hello = "Hello world";
    return hello;
}

var headerContent = document.querySelector('h1'); 
headerContent.textContent = hello();