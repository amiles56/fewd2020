var navs = [{
        Text: ' Home ',
        Url: 'index.html',
        Class: ' link-home ',
        Alt: ' Click here to view the home link '
    },
    {
        Text: ' How To ',
        Url: ' howto.html ',
        Class: ' link-1',
        Alt: ' How do I use this gallery? '
    },
    {
        Text: ' Artists ',
        Url: 'artists.html',
        Class: ' link-1 ',
        Alt: ' Who made the things in my gallery? '
    },
    {
        Text: ' Genres ',
        Url: ' genres.html',
        Class: ' link-1 ',
        Alt: ' What genres exist in my gallery? '
    }


];

//?type=text

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

document.querySelector(' ul ').innerHTML = navBarMarkup;

// Creates hamburger icon for mobile navigation

// Select HTML objects

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function

function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});