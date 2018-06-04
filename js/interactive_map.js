var sidebar_items = [];
var circles = [];
var current_slide = null;
var nothing_selected = true;
var street_views = [];
var image = null;
var heading = null;
var body = null;
var street_view_button = null;
var larger_map = null;
var map_footer = null;

window.onload = function() {
  sidebar_items = document.getElementById('map_navigation').children;
  circles = document.getElementsByClassName('circle');
  street_views = document.getElementById('street_view_container').children;
  image = document.getElementById('map_image');
  heading = document.getElementById('info_title');
  body = document.getElementById('info');
  street_view_button = document.getElementById('street_view');
  larger_map = document.getElementById('larger_map');
  map_footer = document.getElementById('map_footer');

  for (var i = 0; i < sidebar_items.length; i++) {
    var button = sidebar_items[i].firstChild;
    var circle = circles[i];
    button.addEventListener('click', function() {
      show_slide(parseInt(this.innerText[0], 10));
    });

    button.addEventListener('mouseover', function() {
      var element_number = parseInt(this.innerText[0], 10);
      if (element_number <= 1) {
        circles[element_number-1].classList.add('current');
      } else {
        circles[element_number].classList.add('current');
      }
    });

    button.addEventListener('mouseout', function() {
      var element_number = parseInt(this.innerText[0], 10);
      if (element_number <= 1) {
        circles[element_number-1].classList.remove('current');
      } else {
        circles[element_number].classList.remove('current');
      }
    });

    circle.addEventListener('click', function() {
      show_slide(parseInt(this.classList[0], 10));
    });
  }
}

function change_location(n) {
  current_slide += n;
  showInfo();
}

function show_slide(n) {
  current_slide = n;
  showInfo();
}

var previous = null;

function showInfo() {
  if (nothing_selected) {
    var child = document.getElementById("nothing_selected");
    child.parentNode.removeChild(child);
    nothing_selected = false;
  }

  image.style.display = 'block';
  larger_map.style.display = 'none';
  street_view_button.innerHTML = 'Streetview';

  if (previous != null) {
    if (previous == 1) {
      street_views[previous - 1].style.display = 'none';
    } else {
      street_views[previous].style.display = 'none';
    }
  }

  var last_slide = sidebar_items.length - 1;
  if (current_slide > last_slide) {
    current_slide = 1;
  } else if (current_slide < 1) {
    current_slide = last_slide;
  }

  image.src = 'images/wedding_locations/' + current_slide + '.jpg';
  image.alt = current_slide;

  var button_title = sidebar_items[current_slide].firstChild.innerText;
  if (current_slide == 1) {
    button_title = sidebar_items[current_slide-1].firstChild.innerText;
  }
  heading.innerHTML = 'Site #' + button_title;

  switch (current_slide) {
    case 1:
      body.innerHTML = "15 King's College Circle, Built in 1858, Photo taken facing North";
      break;
    case 2:
      body.innerHTML = "27 King's College Circle, Built in 1924, Photo Taken facing South";
      break;
    case 3:
      body.innerHTML = "10 King's College Road, Built in 1907, Photo Taken facing West";
      break;
    case 4:
      body.innerHTML = "7 King's College Circle, Built in 1892, Photo taken facing East (just south of the Gerstein Library)";
      break;
    case 5:
      body.innerHTML = "14 Queen's Park Crescent West, Built in 1950, Photo taken facing West";
      break;
    case 6:
      body.innerHTML = "12 Queen's Park Crescent West, Built in 1923, Photo taken facing West";
      break;
    case 7:
      body.innerHTML = "6 Queen's Park Crescent West, Built in 1932, Facing Queen's Park";
      break;
    case 8:
      body.innerHTML = "East Side of Sigmund Samual Library, Taken in Early Spring (May) 2004";
      break;
    default:
      body.innerHTML = '';
  }
  // USE BELOW WHEN UNIVERSITY COLLEGE WEST IS ADDED BACK
  // if (previous != null) {
  //   sidebar_items[previous-1].firstChild.classList.remove('active');
  //   circles[previous-1].classList.remove('active');
  // }
  // sidebar_items[current_slide-1].firstChild.classList.add('active');
  // circles[current_slide-1].classList.add('active');

  ////////// REMOVE BELOW WHEN UNIVERSITY COLLEGE WEST IS ADDED BACK /////////
  if (previous > 1) {
    previous += 1;
  }

  if (previous != null) {
    sidebar_items[previous-1].firstChild.classList.remove('active');
    circles[previous-1].classList.remove('active');
  }
  if (current_slide > 1) {
    sidebar_items[current_slide].firstChild.classList.add('active');
    circles[current_slide].classList.add('active');
  } else {
    sidebar_items[current_slide-1].firstChild.classList.add('active');
    circles[current_slide-1].classList.add('active');
  }
  //////////////////////////// REMOVE UNITL HERE ////////////////////////////

  previous = current_slide;
}

function enlarge() {
  if (current_slide == null) {
    alert('Please select a location.');
    return;
  }
  window.open('images/wedding_locations/' + current_slide + '.jpg');
}



function street_view() {
  if (current_slide == null) {
    alert('Please select a location.');
    return;
  }
  // the user clicked to view street view
  if (street_view_button.innerHTML == 'Streetview') {
    if (current_slide == 1) {
      street_views[current_slide - 1].style.display = 'block';
    } else {
      street_views[current_slide].style.display = 'block';
    }
    image.style.display = 'none';
    street_view_button.innerHTML = 'Picture';
    larger_map.style.display = 'inline';
  } else {
    // the user clicked to get out of street view
    if (current_slide == 1) {
      street_views[current_slide - 1].style.display = 'none';
    } else {
      street_views[current_slide].style.display = 'none';
    }
    image.style.display = 'block';
    street_view_button.innerHTML = 'Streetview';
    larger_map.style.display = 'none';
  }
}

function open_map() {
  if (current_slide == 1) {
    window.open(street_views[current_slide - 1].src);
  } else {
    window.open(street_views[current_slide].src);
  }
}

function contact_info() {
  if (map_footer.style.display == 'none') {
    map_footer.style.display = 'block';
  } else {
    map_footer.style.display = 'none';
  }
}
