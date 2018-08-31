var n = 0;
var itemsToShow = 4;
var carousel, items, circlesContainer, leftArrow, rightArrow;

$(window).resize(resized);

function resized(){
  var viewportWidth = $(window).width();
  if (viewportWidth > 1800) {
    itemsToShow = 6;
  }
  else if (viewportWidth > 1500) {
    itemsToShow = 5;
  } else {
    itemsToShow = 4;
  }

  var newNumberOfCircles = Math.ceil(items.length / itemsToShow);
  n = Math.min(n, newNumberOfCircles - 1);
  showItems(n);

  var diff = newNumberOfCircles - circlesContainer.children.length;
  if (diff >= 0) {
    for (var i = 0; i < diff; i++) {
      createCircle(circlesContainer.children.length);
    }
  } else {
    for (var i = 0; i < -(diff); i++) {
      circlesContainer.removeChild(circlesContainer.lastChild);
    }
  }

  if (itemsToShow >= items.length) {
    circlesContainer.style.display = 'none';
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  } else {
    circlesContainer.style.display = 'flex';
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }
}


function createCircle(i) {
  var circle = document.createElement('DIV');
  circle.className = 'carousel-circle';
  circle.addEventListener('click', changePage.bind(this, i));
  circlesContainer.appendChild(circle);
}


$(document).ready(function() {
  carousel = document.getElementsByClassName('carousel')[0];
  items = carousel.getElementsByClassName('item');
  circlesContainer = document.getElementsByClassName('circles')[0];
  leftArrow = document.getElementsByClassName('carousel-arrow-left')[0];
  rightArrow = document.getElementsByClassName('carousel-arrow-right')[0];

  // create the circle elements and add click event listener to the circles
  for (var i = 0; i < Math.ceil(items.length / itemsToShow); i++) {
    createCircle(i);
  }

  resized();

  leftArrow.addEventListener('click', goLeft);
  rightArrow.addEventListener('click', goRight);

  // allow arrow keys to control the carousel
  document.addEventListener('keyup', function(event) {
    var key = event.which || event.keyCode;
    if (key == 37) {
      goLeft();
    } else if (key == 39) {
      goRight();
    }
  });
});


function goLeft() {
  n--;
  var direction = 'left';
  if (n <= -1) {
    n = Math.ceil(items.length / itemsToShow) - 1;
    direction = 'right';
  }
  showItems(n, direction);
}


function goRight() {
  n++;
  var direction = 'right';
  if (n >= Math.ceil(items.length / itemsToShow)) {
    n = 0;
    direction = 'left';
  }
  showItems(n, direction);
}


function changePage(page) {
  var oldValue = n;
  n = page;
  if (oldValue > n) {
    showItems(n, 'left');
  } else {
    showItems(n, 'right');
  }
}


function showItems(n, direction) {

  var circles = circlesContainer.children;
  // hide all the items
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  // make all the circles inactive
  for (var i = 0; i < circles.length; i++) {
    circles[i].classList.remove('active');
  }
  // Show itemsToShow number of items, if there are enough left. Otherwise, show how many are left.
  for (var i = 0; i < Math.min(itemsToShow, items.length - itemsToShow * n); i++) {
    var index = itemsToShow * n + i;
    if (direction == 'left') {
      items[index].classList.add('carousel-left-animation');
      items[index].classList.remove('carousel-right-animation');
    } else if (direction == 'right') {
      items[index].classList.add('carousel-right-animation');
      items[index].classList.remove('carousel-left-animation');
    }
    items[index].style.display = 'flex';
    // set left border to default
    items[index].style.borderLeft = '1px solid #CCC';
  }
  circles[n].classList.add('active');

  // remove left border of the the first item after the left arrow
  items[itemsToShow * n].style.borderLeft = 'none';
}
