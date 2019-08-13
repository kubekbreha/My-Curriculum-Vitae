let contentDiv = document.getElementById('content');

let routes = {
  '/': homepage,
  '/index.html': homepage,
  '/campfest': campfest,
  '/chicago': chicago,
  '/dirtbike': dirtbike,
  '/milwaukee': milwaukee,
  '/sunrise': sunrise,
  '/tabitka': tabitka,
  '/opalcamp': opalcamp,
  '/tomas_vyhlad': tomas_vyhlad,
  '/contact': contact,
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];