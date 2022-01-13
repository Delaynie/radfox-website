
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// function to submit and pop up a thank you for submitting the form
function submitForm() {
  document.getElementById("contactForm").submit()
  location.href=location.href;
  alert('Thank you for your submission! Delaynie will get back with you soon!');
}