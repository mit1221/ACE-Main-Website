window.onload = function() {
  var cards = document.getElementById('images_container').children[0];
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  cards.onclick = function() {
    var large_img = document.createElement('IMG');
    if (event.target.src != null) {
      large_img.src = event.target.src;
      var modal = document.getElementById('myModal');
      modal.style.display = 'block';
      document.getElementById('modal_body').appendChild(large_img);
      document.getElementById('header_text').innerHTML = 'hi';


    }

  }
}
