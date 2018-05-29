window.onload = function() {
  var cards = document.getElementById('images_container').children;
  var modal = document.getElementById('myModal');
  var span = document.getElementById("close");
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      var body = document.getElementById('modal_body');
      while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          var body = document.getElementById('modal_body');
          while (body.firstChild) {
            body.removeChild(body.firstChild);
          }
      }
  }
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      var large_img = document.createElement('IMG');
      if (event.target.src != null) {
        large_img.src = event.target.src;
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
        document.getElementById('modal_body').appendChild(large_img);
        document.getElementById('header_text').innerHTML = 'hi';
      }
    });
  }
}
