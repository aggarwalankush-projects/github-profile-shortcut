var profileName = $('.header-nav-current-user strong').text();
var navigationList = $('ul[role="navigation"]');
var profileButton = '<li><a href="/' + profileName +
  '" class="js-selected-navigation-item HeaderNavlink px-2">Profile</a></li>';
navigationList.append(profileButton);
