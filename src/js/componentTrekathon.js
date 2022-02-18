import trekathon from '../images/trekathon.jpg';

function componentTrekathon() {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.appendChild(img);
    img.src = trekathon;
    img.alt = 'sample logo';

    return div;
}

export default componentTrekathon;
