window.onload = function() {
  var button_groups = document.getElementsByClassName('button-group');
  for (var i = 0; i < button_groups.length; i++) {
    var buttons = button_groups[i].children;
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener("click", make_active.bind(this, buttons, j));
      // default selected button
      if (buttons[j].classList.contains('default')) {
        make_active(buttons, j);
      }
    }
  }
};

function make_active(buttons, number) {
  var active = null;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('btn-active')) {
      active = buttons[i];
      buttons[i].classList.remove('btn-active');
    }
  }
  if (active != buttons[number]) {
    buttons[number].classList.add('btn-active');
  }
}
