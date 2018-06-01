window.onload = function() {
  var number_of_buttons = document.getElementById('map_navigation').children.length;
  for (var i = 1; i <= number_of_buttons; i++) {
    var current_buttons = document.getElementsByClassName(i);
    for (var j = 0; j < current_buttons.length; j++) {
      current_buttons[j].addEventListener('click', function() {
        var image = document.createElement('IMG');
        image.src = '../images/wedding_locations/' + i + '.jpg';
        document.getElementById('map_canvas').appendChild(image);
      })
    }
  }
}
