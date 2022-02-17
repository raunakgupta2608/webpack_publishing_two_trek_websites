import trekago from '../images/trekago.jpg';

function componentTrekago() {
    let m = document.createElement('main');
    let p = document.createElement('p');
    let img = document.createElement('img');
    m.append(p);
    p.append(img);
    img.src = trekago;
    img.alt = 'sample logo';
    return m;
}

export default componentTrekago;