window.onload = function() {
  var hash = window.location.hash;
  var currently_open = [];

  //Opening a section automatically on page load
  if (hash != '') {
    var target_element = document.getElementById(hash.substr(1));
    target_element.classList.toggle("open");
    var target_content = target_element.nextElementSibling;
    target_content.style.maxHeight = target_content.scrollHeight + "px";
    currently_open.push(target_element);
  }

  //Opening a section when clicked
  var coll = document.getElementsByClassName("collapsible");

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("open");
      var content = this.nextElementSibling;
      // clicking on an open collapsible
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        index = currently_open.indexOf(this);
        for (i = index + 1; i < currently_open.length; i++) {
          currently_open[i].nextElementSibling.style.maxHeight = null;
          currently_open[i].classList.toggle("open");
        }
        currently_open.splice(index, currently_open.length - index);
      } else {
          // closing already open sections
          if (currently_open.length !== 0) {
            // if one of the outer collapsibles is clicked
            if (!this.classList.contains('inner')) {
              for (i = 0; i < currently_open.length; i++) {
                currently_open[i].nextElementSibling.style.maxHeight = null;
                currently_open[i].classList.toggle("open");
              }
              currently_open = [];
            } else if (currently_open[currently_open.length - 1].classList.contains('inner')) {
              // if one of the inner collapsibles is clicked
              var last_element = currently_open.pop();
              last_element.nextElementSibling.style.maxHeight = null;
              last_element.classList.toggle("open");
            }
          }
          // opening the collapsible
          content.style.maxHeight = content.scrollHeight + "px";
          // for resizing the parent container when an inner collapsible opens
          if (this.classList.contains('inner')) {
            currently_open[0].nextElementSibling.style.maxHeight =
            currently_open[0].nextElementSibling.scrollHeight + content.scrollHeight + "px";
          }
          currently_open.push(this);
      }
    });
  }
}
