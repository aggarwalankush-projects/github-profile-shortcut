var profileName = $('.header-nav-current-user strong').text();
var navigationList = $('ul[role="navigation"]');
var profileButton = '<li class="header-nav-item"><a href="/' + profileName +
  '" class="js-selected-navigation-item header-nav-link">Profile</a></li>';
navigationList.append(profileButton);
