let myName= document.querySelector(".my-name");
 
    myName.addEventListener('click',function(){
    document.body.style.background = randomColors()
  });


  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
