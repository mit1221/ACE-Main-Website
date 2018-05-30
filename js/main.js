window.onload = function() {
  var cards = document.getElementById('images_container').children;
  var modal = document.getElementById('myModal');
  var span = document.getElementById("close");

  function close_modal() {
    var content = document.getElementsByClassName('modal_content')[0];
    content.classList.add('animateout');
    setTimeout(function() {
      modal.style.display = "none";
      var body = document.getElementById('modal_body');
      body.removeChild(body.firstChild);
      content.classList.remove('animateout');
    }, 400);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    close_modal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      close_modal();
    }
  }
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      var large_img = document.createElement('IMG');
      large_img.src = this.children[0].src;
      var modal = document.getElementById('myModal');
      modal.style.display = 'block';
      document.getElementById('modal_body').appendChild(large_img);
      document.getElementById('header_text').innerHTML = this.children[1].innerHTML;
    });
  }
}
