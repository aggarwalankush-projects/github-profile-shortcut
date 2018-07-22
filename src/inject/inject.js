var profileName = document.querySelector('.header-nav-current-user strong').textContent;
var navigationList = document.querySelector('ul[role="navigation"]');
var className = navigationList.querySelector('li > a').className;
var profileButton = '<li><a href="/' + profileName + '" class="' + className + '">Profile</a></li>';
navigationList.innerHTML += profileButton;
