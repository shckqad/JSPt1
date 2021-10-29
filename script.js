var today = new Date();
var hourNow = today.gethours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good Evening';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon Jane!';
} else if (hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h2>' + greeting + '</h2>');
