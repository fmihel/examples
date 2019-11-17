/*
var $d = document;
$d.addEventListener('DOMContentLoaded', function() {
    let out = $d.getElementById('out');
    out.innerText = 'Hello';

 }, false);
 */
import './index.ts';

function story(a) {
    let y = 10;
    const t = 15;
    if (a < y) {
        y = a + y;

        return y + t;
    }
    return y;
}


$(() => {
    if (story(15) > 10) {
        $('#out').append('Hello');
    }
});
