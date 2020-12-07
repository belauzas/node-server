function nav() {
    const DOM = document.querySelector('nav');
    const data = [
        { link: '', name: 'Home' },
        { link: 'about', name: 'About' },
        { link: 'services', name: 'Services' },
        { link: '404', name: '404' },
    ];

    let HTML = '';
    for (let link of data) {
        HTML += `<a href="${location.origin}/${link.link}">${link.name}</a>`
    }

    DOM.innerHTML = HTML;
}

export { nav }