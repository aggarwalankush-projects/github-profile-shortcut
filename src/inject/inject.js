var profileName = $('.header-nav-current-user strong').text();
var navigationList = $('ul[role="navigation"]');
var profileButton = '<li><a href="/' + profileName +
  '" class="js-selected-navigation-item header-navlink">Profile</a></li>';
navigationList.append(profileButton);
