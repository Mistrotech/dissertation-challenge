
function txtEnter(){
    var input = document.getElementById("text");
    input.addEventListener('keydown',(event) => {
        if (event.key === "Enter") { 
            newBtnAdd();
        }
    });
}

function newBtnAdd() {
  const newButton = document.createElement('button');
  newButton.className = "bubble";
  var btnName = document.getElementById('name').value;
  newButton.textContent = btnName;
  document.body.appendChild(newButton);
  popupInvisible("popup-overlay");
}

function popupVisible(className){
        const elements = document.querySelectorAll('.' + className);
                elements.forEach(function(element) {
            if (window.getComputedStyle(element).getPropertyValue('visibility') === 'hidden') {
                element.style.visibility = 'visible';
            }
        });
}
function popupInvisible(className){
    const elements = document.querySelectorAll('.' + className);
                elements.forEach(function(element) {
            if (window.getComputedStyle(element).getPropertyValue('visibility') === 'visible') {
                element.style.visibility = 'hidden';
            }
        });
}
