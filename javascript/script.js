let myName= document.querySelector(".my-name");
 let txt = document.querySelector('.name');
    myName.addEventListener('click',function(){
    txt.style.background = randomColors()
  });


  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
