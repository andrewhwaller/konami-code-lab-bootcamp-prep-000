const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

function init() {
  const body = document.getElementById('body');
   
  body.addEventListener('click', function onKeyDownHandler(e) {
    
  });
}

function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("What do you think you're doing!?");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
