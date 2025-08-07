 const xhr=new XMLHttpRequest();
 xhr.open('GET','https://supersimplebackend.dev/not-supported');

 xhr.addEventListener('load',()=>{
    console.log(xhr.response);
 });
 xhr.send();
 