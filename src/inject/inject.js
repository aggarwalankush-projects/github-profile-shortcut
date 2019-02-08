var profileName = document.querySelector('.header-nav-current-user strong').textContent;
var navigationList = document.querySelector('nav > ul');
var className = navigationList.querySelector('li > a').className;
var profileButton = '<li><a href="/' + profileName + '" class="' + className + '">Profile</a></li>';
navigationList.innerHTML += profileButton;
