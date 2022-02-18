import style from '../css/trekathon.css';
import componentTrekathon from './componentTrekathon';

console.log("Trekathon");
document.getElementById('left-part').appendChild(componentTrekathon());
const text = `Trekathon!!!!<br>
This time Trekathon is all set to rock at the upcoming Weekend.<br>
The festival of Holi is on it's way so let's have fun at Mahuli Fort<br>
Jai Bholenath
`
document.getElementById('right-part').children[0].innerHTML = text;