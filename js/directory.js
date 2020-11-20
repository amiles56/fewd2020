const items = [{
    Title: 'Inferno',
    Url: 'https://www.gutenberg.org/files/41537/41537-h/41537-h.htm',
    Type: 'Text',
    Artist: 'Dante Alighieri',
    Genre: 'Fantasy',
    Description: 'The first part of Dantes Divine Comedy',
    Image: './img/icons8-book-96.png',
    Alt: ' Click here to checkout '
},
{
    Title: '12th Floor Party',
    Artist: 'Jules Gaia',
    Url: 'https://www.epidemicsound.com/track/pN2JH0wO2W/',
    Type: 'Music',
    Genre: 'Electroswing',
    Description: 'A fun, poppy electroswing tune',
    Image: './img/icons8-sound-96.png',
    Alt: ' Click here to checkout '
},
{
    Title: 'The Dunwich Horror',
    Artist: 'H.P. Lovecraft',
    Url: 'https://www.gutenberg.org/files/50133/50133-h/50133-h.htm',
    Type: 'Text',
    Genre: 'Horror',
    Description: ' A horror story by H.P. Lovecraft',
    Image: './img/icons8-book-96.png',
    Alt: ' Click here to checkout '
},
{
    Title: 'How To Play Magic: the Gathering',
    Artist: 'Tolarian Community College',
    Url: 'https://www.youtube.com/watch?v=wif9ppH5JpI',
    Type: 'Video',
    Genre: 'Documentary',
    Description: 'a thing',
    Image: './img/icons8-film-reel-96.png',
    Alt: ' Click here to checkout '
},
{
    Title: 'We&#39;re at Wit&#39;s End',
    Artist: 'Jules Gaia',
    Url: 'https://www.epidemicsound.com/track/5vk3RzhRXB',
    Type: 'Music',
    Genre: 'Electroswing',
    Description: 'A jazzy, sexy tune',
    Image: './img/icons8-sound-96.png',
    Alt: ' Click here to checkout '
},
{    
    Title: 'Russian Blue Cat on White Textile',
    Url: 'https://www.pexels.com/photo/bed-bedroom-animal-pet-5503708/',
    Type: 'Image',
    Artist: 'T. S.',
    Genre: 'Portrait',
    Description: 'Russian Blue Cat on White Textile',
    Image: './img/icons8-image-96.png',
    Alt: ' Click here to checkout '
}
];

var disp_items = [];

if (artist) {
    for (const item of items) {
        if (artist == item.Artist.toLowerCase().replace(/\s/g,'_').replace(/\./g,'')) {
            disp_items.push(item);
        }
    }
} else if (genre) {
    for (const item of items) {
        console.log(`${item.Genre}`);
        if (genre == item.Genre.toLowerCase()) {
            disp_items.push(item);
        }
    }
} else if (type) {
    for (const item of items) {
        if (type == item.Type.toLowerCase()) {
            disp_items.push(item);
        }
    }
} else {
    disp_items = items;
}

// Loop that places article items to create the directory. 
const dirMarkup = `
${disp_items.map(item => `<article class="item"><h2 class="title">${item.Title}</h2><h3>${item.Artist}</h3><a target="_blank" href=${item.Url} alt="${item.Type}"><img src="${item.Image}" title="${item.Alt}"/></a></article>`).join(' ')}
`;

document.querySelector('.directory').innerHTML = dirMarkup;
