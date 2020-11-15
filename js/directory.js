const items = [{
    Title: 'Inferno',
    Url: 'https://www.gutenberg.org/files/41537/41537-h/41537-h.htm',
    Type: 'Text',
    Artist: 'Dante Alighieri',
    Genre: 'Fantasy',
    Description: 'The first part of Dantes Divine Comedy',
    Image: '../img/book',
    Alt: ' Click here to checkout '
},
{
    Title: '12th Floor Party',
    Artist: 'Jules Gaia',
    Url: 'https://www.epidemicsound.com/track/pN2JH0wO2W/',
    Type: 'Music',
    Genre: 'Electroswing',
    Description: 'A fun, poppy electroswing tune',
    Image: '../img/album',
    Alt: ' Click here to checkout '
},
{
    Title: 'The Dunwich Horror',
    Artist: 'H.P. Lovecraft',
    Url: 'https://www.gutenberg.org/files/50133/50133-h/50133-h.htm',
    Type: 'Text',
    Genre: 'Horror',
    Description: ' A horror story by H.P. Lovecraft',
    Image: '../img/book',
    Alt: ' Click here to checkout '
},
{
    Title: 'Unknown',
    Artist: 'Unknown',
    Url: 'index.html',
    Type: 'Image',
    Genre: 'Unknown',
    Description: 'a thing',
    Image: './img/icons8-full-image-100.png',
    Alt: ' Click here to checkout '
}
];

// Loop that places list items to create the directory. 
const dirMarkup = `
${items.map(item => `<article class="item"><h2 class="title">${item.Title}</h2><h3>${item.Artist}</h3><a href=${item.Url} alt="${item.Type}"><img src="${item.Image}" title="${item.Alt}"/></a></article>`).join(' ')}
`;

document.querySelector('.directory').innerHTML = dirMarkup;
