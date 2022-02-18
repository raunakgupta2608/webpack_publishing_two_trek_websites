import style from '../css/trekago.css';
import componentTrekago from './componentTrekago';

console.log("Trekago");
document.getElementById('left-part').appendChild(componentTrekago());
const text = `Trekago!!!!<br>
Trekago is back with a bang<br>
Let's celebrate the holy day of Mahashivratri at Shri Bhimashankar Jyotirling<br>
Om Namah Shivay
`
document.getElementById('right-part').children[0].innerHTML = text;