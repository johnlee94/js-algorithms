function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
   var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}

createButtons();

// => This creates 5 buttons, but on click, it returns 'This is button 6'
// => Fix it, and why is it doing it?

// course


// the button prints out 'This is button 6' because the buttons are created at
// each iterator but var i changes to 6 after the loop is finished
// Also, it prints out 6 because the loop breaks after i iterates to 6

// if you use an IFFE, you can store each i as it iterates which fixes the problem
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
   var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     (function(num) {
       button.onclick = function() {
         alert('This is button ' + i);
       };
     })(i);
     body.appendChild(button);
   }
}

createButtons();

// ES6 Magic

function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
   var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
