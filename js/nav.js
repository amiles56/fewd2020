const navs = [{
        Text: ' Home ',
        Url: 'index.html',
        Class: ' Home ',
        Alt: ' Click here to view the home link '
    },
    {
        Text: ' How To ',
        Url: ' howto.html ',
        Class: ' link-1',
        Alt: ' How do I use this library? '
    },
    {
        Text: ' Types ',
        Url: ' types.html',
        Class: ' link-1 ',
        Alt: ' What kinds of things are in my library? '
    },
    {
        Text: ' Genres ',
        Url: ' genres.html ',
        Class: ' link-1 ',
        Alt: ' What genres exist in my library? '
    }


];

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