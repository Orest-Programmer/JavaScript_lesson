"use stric"

function changeColorInner() {
    let elements = document.querySelectorAll('ul>li>a');
    // let elem = document.getElementsByTagName('a');
    for (let i = 0; i < elements.length; i++) {
        let currentEl = elements[i];
        // if (!elem[i].href.indexOf('http://') || !elem[i].href.indexOf('ftp://')){
        //     // elem[i].classList.add('external-red');
        //     elem[i].className = 'external-red';
        // } Can realese like this
        if (currentEl.matches('[href*="http://"]')
            || currentEl.matches('[href*="ftp://"]')) {
            currentEl.setAttribute('class', 'external-red')
        }

    }
}