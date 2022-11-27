
let first = document.querySelector('#first');
first.addEventListener('mousemove', hearts);
first.addEventListener('mousedown', hearts);
first.addEventListener('mouseup', hearts);
function hearts(e){
  if(true){
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX-25;
    let y = e.offsetY-25;
    let size = Math.random() * 80;
    
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    heart.style.width = 10 + size + 'px';
    heart.style.height = 10 + size + 'px';

    let transormvalue = Math.random() * 360;
    heart.style.transform = 'rotate('+ transormvalue + 'deg)';


    body.appendChild(heart);

    setTimeout(function(){
      heart.remove();
    },500);
  }
}

//hearts();