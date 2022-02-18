import trekago from '../images/trekago.jpg';

function componentTrekago() {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.appendChild(img);
    img.src = trekago;
    img.alt = 'sample logo';

    return div;
}

export default componentTrekago;